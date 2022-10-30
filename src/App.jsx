import {
  Center, Flex, Grid, GridItem, Text, Button, Checkbox, Stack, FormControl, FormLabel, Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLottie } from 'lottie-react'
import api from './services/api';
import plane from './assets/plane.json'

function App() {

  const style = {
    height: 100,
  };

  const options = {
    animationData: plane,
    loop: true,

  };

  const { View } = useLottie(options, style);

  return (
    <Flex height="100vh" bg={"#3490dc"} w={"100%"} flexDirection={"column"}  >
      <Center>
        <Text fontSize='4xl' color={"#fff"}>
          Viagem
        </Text>
        {View}
      </Center>

    </Flex >



  )
}

export default App
