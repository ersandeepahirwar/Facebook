import Image from "next/image";

import { useRef, useState } from "react";
import { useSession } from "next-auth/client";

import { CameraIcon, TrashIcon, VideoCameraIcon } from "@heroicons/react/solid";
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
    <div className="mx-auto mt-5 max-w-[300px] rounded-2xl bg-white text-gray-500 shadow-md sm:mt-7 sm:max-w-[450px]">
      <div className="flex flex-col items-center justify-center space-y-3 p-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <Image
          src={session.user.image}
          alt="User Profile"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex w-full sm:w-auto sm:flex-1">
          <input
            type="text"
            placeholder={`What's on your mind?`}
            className="h-8 flex-grow rounded-full border-none bg-gray-100 px-2 text-center text-[13px] outline-none focus:outline-none"
            ref={textRef}
          />
          <button hidden type="submit" onClick={publishPost}>
            Submit
          </button>
        </form>
        {file && (
          <div
            onClick={removeFile}
            className="flex transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <img
              src={file}
              alt="Post Thumbnail"
              className="h-[60px] rounded-xl object-contain"
            />
            <TrashIcon className="mt-1 h-5 text-red-500" />
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t p-2">
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-gray-100 sm:space-x-2">
          <VideoCameraIcon className="h-5 text-red-500" />
          <p className="hidden sm:inline-flex sm:text-xs">Live Video</p>
        </div>
        <div
          onClick={() => fileRef.current.click()}
          className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-gray-100 sm:space-x-2"
        >
          <CameraIcon className="h-5 text-green-400" />
          <p className="hidden sm:inline-flex sm:text-xs">Photo/Video</p>
          <input hidden type="file" onChange={selectFile} ref={fileRef} />
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-gray-100 sm:space-x-2">
          <EmojiHappyIcon className="h-5 text-yellow-300" />
          <p className="hidden sm:inline-flex sm:text-xs">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
