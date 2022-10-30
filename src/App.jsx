import {
  Center, Flex, Grid, GridItem, Text, Button, Checkbox, Stack, FormControl, FormLabel, Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLottie } from 'lottie-react'
import api from './services/api';
import plane from './assets/plane.json'

function App() {


  // CIDADE
  const [city, setCity] = useState([])
  const [cidade, setCidade] = useState([])
  const [filter, setFilter] = useState(true)

  async function GetCity() {
    const response = await api.get("/city");
    setCity(response.data)
    console.log(response.data);
  }

  function cid(e) {
    const newArray = cidade
    const indexOf = newArray.indexOf(e)
    console.log(indexOf);
    if (indexOf > -1) {
      newArray.splice(indexOf, 1)
    } else {
      newArray.push(e)
    }
    setCidade(newArray)
    console.log(cidade);

  }

  // PAIS
  const [country, setCountry] = useState([])
  const [code, setCode] = useState([])

  async function GetCountry() {
    const response = await api.get("/country");
    setCountry(response.data)
    console.log(response.data);
  }

  function Paises(e) {
    const newArray = code
    const indexOf = newArray.indexOf(e)
    console.log(indexOf);
    if (indexOf > -1) {
      newArray.splice(indexOf, 1)
    } else {
      newArray.push(e)
    }
    setCode(newArray)
    console.log(code);
  }

  useEffect(() => {
    GetCountry();
    GetCity();
  }, []);





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

          <GridItem bg={"#fff"} colStart={4} colEnd={6} h='100%' w={400} borderRadius={40} >

            <Center flexDirection={"column"} mt={5} p={5}>
              {/* PAIS */}
              <Text fontSize='2xl' >Escolha o Pais</Text>
              <Stack overflowY={"scroll"} h={150} w={320} mb={5} >
                {country.map((e) => (
                  <div>
                    <Checkbox onChange={(e) => Paises(e.target.value)} iconColor='blue' iconSize='1rem' value={e.code}>{e.name_ptbr}</Checkbox>
                    <br></br>
                  </div>
                ))
                }
              </Stack >
              {/* CIDADE */}
              <Center>
                <Text fontSize='2xl' >Escolha a Cidade</Text>
                <Button colorScheme='teal' size='xs' onClick={() => setFilter(!filter)}>
                  Filtrar por Pais
                </Button>
              </Center>
              <Stack overflowY={"scroll"} h={150} w={320} >
                {filter ?
                  city.map((e) => (
                    <div>
                      <Checkbox onChange={(e) => cid(e.target.value)} iconColor='blue' iconSize='1rem' value={e.name}>{e.name}</Checkbox>
                      <br></br>
                    </div>
                  ))
                  :
                  city.map((e) => {

                    if (code.includes(e.country_code) == true) {
                      return (
                        <div>
                          <Checkbox onChange={(e) => cid(e.target.value)} iconColor='blue' iconSize='1rem' value={e.name}>{e.name}</Checkbox>
                          <br></br>
                        </div>)
                    } else {
                      console.log("não tem");
                    }

                  })
                }

              </Stack >
            </Center>



          </GridItem>

        </Grid>
      </Center>

    </Flex >



  )
}

export default App
