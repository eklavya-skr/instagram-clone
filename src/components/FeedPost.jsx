import PostHeader from "./PostHeader";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box my={2}>
        <Image src="/img1.png" alt="use profile pic" />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
