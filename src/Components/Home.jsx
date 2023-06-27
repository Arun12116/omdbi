import { Box, Container, Heading, Center, Input, Button } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import MyContext from '../Context/MyContext'
import { useContext } from 'react'
const Home = () => {

    const { setSearch,handleClick} = useContext(MyContext)
    return (
        <>
            <Box>
                <Container mt={5}>
                    <Heading >
                        Search Your Favourite Movies

                    </Heading>

                    <Center mt={5}>
                        <Input placeholder='Search Movies' size='md' onChange={(e) => { setSearch(e.target.value) }} />
                        <Button colorScheme='blue' ml={5}  onClick={()=>handleClick()}>
                            Search
                        </Button>
                    </Center>

                </Container>
                <Box mt={10}>

                    <Cards />

                </Box>



            </Box>




        </>
    )
}

export default Home