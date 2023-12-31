import {
    Box,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    useToast,
  } from "@chakra-ui/react";
  import { useNavigate, useSearchParams } from "react-router-dom";
  import Logo from "C:/Users/asus/auth_email_reset_pass/frontend/frontend/src/logo.png";
  import { ActivateUser } from "../../../hooks/useFetchQuery";
  import { useEffect, useState } from "react";
  import { useMutation } from "react-query";
  
  const ActivateEmail = () => {
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");
    const toast = useToast();
    const [pageLoading, setPageLoading] = useState(true);
  
  
    const mutation = useMutation((c) => ActivateUser(c), {
      onSuccess: (data) => {
        toast({
          title: "Email Activated",
          position: "top",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
  
        console.log(data);
      },
      onError: (error) => {
        toast({
          title: "Email Activation Failed",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
  
        console.log(error);
      },
    });
  
    useEffect(() => {
      if (!uid || !token) {
        setPageLoading(false);
        navigate("/auth/login");
        toast({
          title: "You don't have permission to access activation page",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
  
        return;
      }
      const credentials = { uid, token };
      if (uid && token) {
        setPageLoading(false);
        mutation.mutate(credentials);
      }
    }, [mutation, navigate, toast, token, uid]);
    const { isLoading, isError, isSuccess } = mutation;
    if (pageLoading || isLoading) {
      return (
        <Box
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear-gradient(
            22deg,
            rgba(158,134,37,1) 24%,
            rgba(245,226,197,1) 73%
          )"
          bgSize="cover"
          bgPosition="right top"
          bgRepeat="no-repeat"
        >
          <Box className="app-loader"></Box>
        </Box>
      );
    }
  
    return (
      <Stack
        bgGradient="linear-gradient(
        22deg,
        rgba(158,134,37,1) 24%,
        rgba(245,226,197,1) 73%
      )"
        bgSize="cover"
        width="100vw"
        color="brand.white"
        h="100vh"
        align="center"
        justify="center"
      >
        <Stack bg="white" maxW="lg" p={7} borderRadius="3xl" spacing={4}>
          <Flex justify="center">
            <Image src={Logo} onClick={() => navigate("/auth/login")} />
          </Flex>
          <Divider />
  
          {isSuccess && (
            <Heading size="lg" textAlign="center" color="brand.blue">
              Thank you for Activating your Email
            </Heading>
          )}
          {isError && (
            <Heading size="lg" textAlign="center" color="red.400">
              Email Activation Failed !!
            </Heading>
          )}
        </Stack>
      </Stack>
    );
  };
  export default ActivateEmail;