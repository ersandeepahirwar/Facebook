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
    <div className="max-w-[300px] sm:max-w-[450px] bg-white text-gray-500 mt-5 sm:mt-7 rounded-2xl shadow-md mx-auto">
      <div className="flex items-center justify-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 p-3">
        <Image
          src={session.user.image}
          alt="User Profile"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="w-full sm:w-auto flex sm:flex-1">
          <input
            type="text"
            placeholder={`What's on your mind?`}
            className="border-none outline-none focus:outline-none bg-gray-100 rounded-full flex-grow text-[13px] px-2 h-8 text-center"
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
              className="h-[60px] object-contain rounded-xl"
            />
            <TrashIcon className="h-5 text-red-500 mt-1" />
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t p-2">
        <div className="flex flex-grow items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 p-1 sm:space-x-2">
          <VideoCameraIcon className="h-5 text-red-500" />
          <p className="hidden sm:inline-flex sm:text-xs">Live Video</p>
        </div>
        <div
          onClick={() => fileRef.current.click()}
          className="flex flex-grow items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 p-2 sm:space-x-2"
        >
          <CameraIcon className="h-5 text-green-400" />
          <p className="hidden sm:inline-flex sm:text-xs">Photo/Video</p>
          <input hidden type="file" onChange={selectFile} ref={fileRef} />
        </div>
        <div className="flex flex-grow items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 p-2 sm:space-x-2">
          <EmojiHappyIcon className="h-5 text-yellow-300" />
          <p className="hidden sm:inline-flex sm:text-xs">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
