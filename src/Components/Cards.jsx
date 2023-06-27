import { Box, Heading, Flex, Text, Divider, CardBody, Image, Stack, Card } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import MyContext from '../Context/MyContext'

const Cards = () => {

    const {moviesData} = useContext(MyContext)
    // console.log(moviesData);
    if (!moviesData) {
        return null;

    }
    return (
        <>
            <Box>


                <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
                    {
                        moviesData.map((items) => {
                            return <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={items.Poster}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{items.Title}</Heading>
                                        <Text>
                                            Type: {items.Type
                                            }
                                        </Text>
                                        <Text color='blue.600' fontSize='2xl'>
                                            RealseYears:{items.Year
                                            }
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />

                            </Card>

                        })
                    }



                </Flex>


            </Box>
        </>
    )
}

export default Cards