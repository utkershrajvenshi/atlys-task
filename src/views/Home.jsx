import React, { useContext, useState } from "react";
import Header from "../components/Header";
import FeedCard from "../molecules/FeedCard";
import NewPostForm from "../molecules/NewPostForm";
import Login from "./Login";
import Modal from "../components/Modal";
import SignUp from "./SignUp";
import Button from "../components/Button";
import AuthContext from "../context/AuthContext";

const existingPosts = [
  {
    id: 1,
    author: "Theresa Webb",
    createdAt: new Date(new Date().getTime() - 1000 * 60 * 5 ),
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.",
  },
  {
    id: 2,
    author: "John Doe",
    createdAt: new Date(new Date().getTime() - 1000 * 60 * 15),
    content: "taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus.",
  },
]
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCurrentUser } = useContext(AuthContext);
  const [shouldShowLogin, setShouldShowLogin] = useState(true);
  const [userFeed, setUserFeed] = useState(existingPosts);

  const onSubmitNewPost = (content) => {
    const currentUser = getCurrentUser();
    if(currentUser) {
      // Post new post
      setUserFeed([
        {
          id: userFeed.length + 1,
          author: currentUser,
          createdAt: new Date(),
          content,
        },
        ...userFeed,
      ]);
    } else {
      // Open modal
      setIsModalOpen(true);
    }
  }

  const onLoginSuccess = () => {
    setIsModalOpen(false);
  }

  const onSignUpSuccess = () => {
    setIsModalOpen(false);
  }
  
  return (
    <>
      <Header key={isModalOpen}/>
      <section className="forum-body relative top-28 gap-2">
        <NewPostForm className="mb-6" onSubmit={onSubmitNewPost}/>
        {userFeed.map((post) => (
          <FeedCard key={post.id} className="mb-2 max-w-[720px]" {...post} />
        ))}
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {shouldShowLogin ? (
          <Login footerNavigator={<Button className="bg-transparent border-0 p-0 text-blue-700 font-bold hover:translate-y-0" onClick={() => setShouldShowLogin(false)}>Sign Up</Button>} onLoginSuccess={onLoginSuccess}/>
        ) : (
          <SignUp footerNavigator={<Button className="bg-transparent border-0 p-0 text-blue-700 font-bold hover:translate-y-0" onClick={() => setShouldShowLogin(true)}>Sign In</Button>} onSignUpSuccess={onSignUpSuccess}/>
        )}
      </Modal>
    </>
  )
};

export default Home