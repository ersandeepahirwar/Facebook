import Image from "next/image";

import { useRef, useState } from "react";
import { useSession } from "next-auth/client";

import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";

import { serverTimestamp, collection, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { database, storage } from "../../../../firebase";

const Publisher = () => {
  const [session] = useSession();

  const textRef = useRef(null);
  const fileRef = useRef(null);

  const [file, setFile] = useState(null);

  const publishPost = async (event) => {
    event.preventDefault();

    if (!textRef.current.value) return;

    const posts = doc(collection(database, "posts"));
    await setDoc(posts, {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      text: textRef.current.value,
      timestamp: serverTimestamp(),
    }).then(() => {
      if (file) {
        const { id } = posts;
        const storageRef = ref(storage, "posts");
        const thumbnailRef = ref(storageRef, id);
        uploadString(thumbnailRef, file, "data_url").then((thumbnail) => {
          getDownloadURL(thumbnail.ref).then((downloadURL) => {
            const url = doc(database, "posts", id);
            setDoc(url, { thumbnail: downloadURL }, { merge: true });
          });
        });

        removeFile();
      }
    });

    textRef.current.value = "";
  };

  const selectFile = (event) => {
    const reader = new FileReader();

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="mt-6 p-2 bg-white text-gray-500 font-medium rounded-2xl shadow-md">
      <div className="p-4 space-x-4 flex items-center">
        <Image
          src={session.user.image}
          alt="User Profile"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
            className="h-12 px-5 flex-grow rounded-full bg-gray-100 focus:outline-none"
            ref={textRef}
          />
          <button hidden type="submit" onClick={publishPost}>
            Submit
          </button>
        </form>
        {file && (
          <div
            onClick={removeFile}
            className="flex flex-col filter cursor-pointer hover:brightness-110 transition transform duration-150 hover:scale-105"
          >
            <img
              src={file}
              alt="Post Thumbnail"
              className="h-10 object-contain"
            />
            <p className="text-xs text-center text-red-500">Remove</p>
          </div>
        )}
      </div>
      <div className="p-3 flex justify-evenly border-t">
        <div className="publisherIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => fileRef.current.click()} className="publisherIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input hidden type="file" onChange={selectFile} ref={fileRef} />
        </div>
        <div className="publisherIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
