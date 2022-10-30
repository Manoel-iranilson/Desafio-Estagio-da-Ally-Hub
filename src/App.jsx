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

      <Center>
        <Grid autoColumns h={400} >
          <GridItem bg={"#fff"} mr={20} colSpan={2} h="100%" w={400} borderRadius={40}>
            {/* FORM */}
            <Center flexDirection={"column"}>
              <Text fontSize='4xl' >
                Dados Pessoais
              </Text>
              <Center >
                <FormControl w={240}>
                  <FormLabel>Nome</FormLabel>
                  <Input isInvalid={isErrorName} type='text' value={name} onChange={handleNameChange} />
                  <FormLabel fontSize={20}>Email</FormLabel>
                  <Input isInvalid={isErrorEmail} type='text' value={email} onChange={handleEmailChange} />
                  <FormLabel fontSize={20}>Telefone</FormLabel>
                  <Input type='tel' isInvalid={isErrorTelefone} value={telefone} onChange={handleTelefoneChange} />
                  <FormLabel fontSize={20}>CPF</FormLabel>
                  <Input type='number' isInvalid={isErrorCpf} value={cpf} onChange={handleCPFChange} />
                </FormControl>
              </Center>
            </Center>
          </GridItem>


        </Grid>
      </Center>

    </Flex >



  )
}

export default App
