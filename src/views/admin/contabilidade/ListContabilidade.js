import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import illustration from "assets/img/manuntencao3.png";

function ListContabilidade() {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Center h="100vh">
      <Flex
        direction="column"
        alignItems="center" // Centraliza os elementos na vertical
      >
        <Image
          src={illustration}
          alt="Ilustração"
          maxW="50%" // Reduzimos a largura máxima para tornar a imagem menor
        />
        <Heading color={textColor} fontSize="36px" mt="20px" textAlign="center">
          Pagina de Contabilidade
        </Heading>
        <Text color={textColor} mt="10px" textAlign="center">
          Estamos em manuntencao
        </Text>
      </Flex>
    </Center>
  );
}

export default ListContabilidade;