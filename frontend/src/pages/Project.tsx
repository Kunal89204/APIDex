import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  Flex,
  Tag,
  VStack,
  Input,
} from "@chakra-ui/react";

interface Parameter {
  name: string;
  type: "body" | "params" | "query";
  dataType: string;
  required: boolean;
  description: string;
}

interface Api {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  description: string;
  parameters: Parameter[];
}

interface ApiGroup {
  groupName: string;
  apis: Api[];
}

const Project: React.FC = () => {
  const apiSchema: ApiGroup[] = [
    {
      groupName: "Users",
      apis: [
        {
          method: "POST",
          endpoint: "v2/providers",
          description: "Create a new provider",
          parameters: [
            {
              name: "id",
              type: "body",
              dataType: "string",
              required: true,
              description: "Unique identifier for the provider",
            },
            {
              name: "name",
              type: "body",
              dataType: "string",
              required: true,
              description: "Name of the provider",
            },
            {
              name: "email",
              type: "body",
              dataType: "string",
              required: true,
              description: "Email address of the provider",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/providers/{id}",
          description: "Retrieve a specific provider's details",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the provider",
            },
          ],
        },
        {
          method: "PUT",
          endpoint: "v2/providers/{id}",
          description: "Update an existing provider's details",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the provider",
            },
            {
              name: "name",
              type: "body",
              dataType: "string",
              required: false,
              description: "Updated name of the provider",
            },
            {
              name: "email",
              type: "body",
              dataType: "string",
              required: false,
              description: "Updated email address of the provider",
            },
          ],
        },
        {
          method: "DELETE",
          endpoint: "v2/providers/{id}",
          description: "Delete a specific provider",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the provider",
            },
          ],
        },
      ],
    },
    {
      groupName: "Posts",
      apis: [
        {
          method: "POST",
          endpoint: "v2/posts",
          description: "Create a new post",
          parameters: [
            {
              name: "title",
              type: "body",
              dataType: "string",
              required: true,
              description: "Title of the post",
            },
            {
              name: "content",
              type: "body",
              dataType: "string",
              required: true,
              description: "Content of the post",
            },
            {
              name: "authorId",
              type: "body",
              dataType: "string",
              required: true,
              description: "ID of the author of the post",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/posts/{id}",
          description: "Retrieve a specific post's details",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the post",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/posts",
          description: "Retrieve a list of all posts",
          parameters: [],
        },
        {
          method: "PUT",
          endpoint: "v2/posts/{id}",
          description: "Update an existing post",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the post",
            },
            {
              name: "title",
              type: "body",
              dataType: "string",
              required: false,
              description: "Updated title of the post",
            },
            {
              name: "content",
              type: "body",
              dataType: "string",
              required: false,
              description: "Updated content of the post",
            },
          ],
        },
        {
          method: "DELETE",
          endpoint: "v2/posts/{id}",
          description: "Delete a specific post",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the post",
            },
          ],
        },
      ],
    },
    {
      groupName: "Comments",
      apis: [
        {
          method: "POST",
          endpoint: "v2/comments",
          description: "Add a comment to a post",
          parameters: [
            {
              name: "postId",
              type: "body",
              dataType: "string",
              required: true,
              description: "ID of the post to which the comment is added",
            },
            {
              name: "content",
              type: "body",
              dataType: "string",
              required: true,
              description: "Content of the comment",
            },
            {
              name: "authorId",
              type: "body",
              dataType: "string",
              required: true,
              description: "ID of the author of the comment",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/comments/{id}",
          description: "Retrieve a specific comment's details",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the comment",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/comments",
          description: "Retrieve comments for a specific post",
          parameters: [
            {
              name: "postId",
              type: "query",
              dataType: "string",
              required: true,
              description: "ID of the post for which comments are retrieved",
            },
          ],
        },
        {
          method: "DELETE",
          endpoint: "v2/comments/{id}",
          description: "Delete a specific comment",
          parameters: [
            {
              name: "id",
              type: "params",
              dataType: "string",
              required: true,
              description: "Unique identifier for the comment",
            },
          ],
        },
      ],
    },
    {
      groupName: "Likes",
      apis: [
        {
          method: "POST",
          endpoint: "v2/posts/{postId}/likes",
          description: "Like a specific post",
          parameters: [
            {
              name: "postId",
              type: "params",
              dataType: "string",
              required: true,
              description: "ID of the post to be liked",
            },
            {
              name: "userId",
              type: "body",
              dataType: "string",
              required: true,
              description: "ID of the user liking the post",
            },
          ],
        },
        {
          method: "DELETE",
          endpoint: "v2/posts/{postId}/likes/{userId}",
          description: "Remove like from a specific post",
          parameters: [
            {
              name: "postId",
              type: "params",
              dataType: "string",
              required: true,
              description: "ID of the post from which to remove the like",
            },
            {
              name: "userId",
              type: "params",
              dataType: "string",
              required: true,
              description: "ID of the user whose like is being removed",
            },
          ],
        },
        {
          method: "GET",
          endpoint: "v2/posts/{postId}/likes",
          description: "Retrieve all likes for a specific post",
          parameters: [
            {
              name: "postId",
              type: "params",
              dataType: "string",
              required: true,
              description: "ID of the post for which likes are retrieved",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box color="white">
      <Heading
        as="h1"
        size="xl"
        bgClip="text"
        bgGradient="linear(to-br, #FDC830, #F37335, #D93C7A)"
        mb={6}
      >
        Social Image
      </Heading>

      <VStack spacing={8} align="start">
        {/* Users Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Users
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem
              borderWidth="1px"
              borderColor="gray.700"
              rounded="xl"
              w="40vw"
              mb={4}
            >
              <h2>
                <AccordionButton
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Flex align="center" gap={2}>
                    <Tag size="lg" variant="outline" colorScheme="blue">
                      POST
                    </Tag>
                    <Text as="span">| /v2/provider/</Text>
                    <Text as="span" color="blue.400">{`{clientId}`}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb={4}>Creates a new user</Text>

                <Table variant="simple" size="sm" width="100%">
                  <Thead>
                    <Tr
                      borderBottom="1px solid gray"
                      paddingY="4px"
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Th border="none" fontSize="sm" textAlign="right">
                        Name
                      </Th>
                      <Th
                        border="none"
                        fontSize="sm"
                        flex="4"
                        textAlign="center"
                      >
                        Description
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr display="flex" justifyContent="flex-end">
                      <Td
                        border="none"
                        textAlign="right"
                        className="flex flex-col items-center justify-center"
                      >
                        <Text>id</Text>
                        <Text color={"gray"} fontSize={"xs"}>
                          (query)
                        </Text>
                      </Td>
                      <Td
                        border="none"
                        flex="4"
                        className="flex flex-col items-end gap-2 pl-10"
                      >
                        <Text>Limit the number of results</Text>
                        <Input
                          type="text"
                          border="1px solid gray"
                          borderRadius={3}
                          width="60%"
                          height="30px"
                        />
                      </Td>
                    </Tr>
                    <Tr display="flex" justifyContent="flex-end">
                      <Td
                        border="none"
                        textAlign="right"
                        className="flex flex-col items-center justify-center"
                      >
                        <Text>username</Text>
                        <Text color={"gray"} fontSize={"xs"}>
                          (params)
                        </Text>
                      </Td>
                      <Td
                        border="none"
                        flex="4"
                        className="flex flex-col items-end gap-2 pl-10"
                      >
                        <Text>Limit the number of results</Text>
                        <Input
                          type="text"
                          border="1px solid gray"
                          borderRadius={3}
                          width="60%"
                          height="30px"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderWidth="1px"
              borderColor="gray.700"
              rounded="xl"
              w="40vw"
              mb={4}
            >
              <h2>
                <AccordionButton>
                  <Flex align="center" gap={2}>
                    <Tag size="lg" variant="outline" colorScheme="green">
                      GET
                    </Tag>
                    <Text as="span">| / v2 / provider / </Text>
                    <Text as="span" color="green.400">{`{clientId}`}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>Retrieves user data</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* Posts Section */}
        {apiSchema &&
          apiSchema.map((val, i) => (
            <Box key={i}>
              <Heading as="h2" size="lg" mb={4}>
                {val.groupName}
              </Heading>

              <Accordion allowMultiple>
                {val?.apis.map((el) => (
                  <AccordionItem
                    borderWidth="1px"
                    borderColor="gray.700"
                    rounded="xl"
                    w="40vw"
                    mb={4}
                  >
                    <h2>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <Flex align="center" gap={2}>
                          <Tag
                            size="lg"
                            variant="outline"
                            colorScheme={
                              el.method === "POST"
                                ? "blue"
                                : el.method === "GET"
                                ? "green"
                                : el?.method === "PATCH"
                                ? "orange"
                                : el.method === "DELETE"
                                ? "red"
                                : "gray" // Default color if no match
                            }
                          >
                            {el.method}
                          </Tag>

                          <Text as="span">
                            {/* the weirdest code i have ever written 🤣 */}
                            {`| ${el.endpoint.replace(/\/\{[^}]+\}/g, "")}`}/
                            {el.parameters.filter(
                              (param) => param.type === "params"
                            ).length > 0
                              ? `{ ${el.parameters
                                  .filter((param) => param.type === "params")
                                  .map((param) => param.name)
                                  .join(", ")} }`
                              : ""}
                          </Text>
                        </Flex>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text mb={4}>{el.description}</Text>

                      <Table variant="simple" size="sm" width="100%">
                        <Thead>
                          <Tr
                            borderBottom="1px solid gray"
                            paddingY="4px"
                            display="flex"
                            justifyContent="flex-end"
                          >
                            <Th border="none" fontSize="sm" textAlign="right">
                              Name
                            </Th>
                            <Th
                              border="none"
                              fontSize="sm"
                              flex="4"
                              textAlign="center"
                            >
                              Description
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {el.parameters.map((val, i) => (
                            <Tr
                              display="flex"
                              justifyContent="flex-end"
                              key={i}
                            >
                              <Td
                                border="none"
                                textAlign="right"
                                className="flex flex-col items-center justify-center"
                              >
                                <Text>{val.name}</Text>
                                <Text color={"gray"} fontSize={"xs"}>
                                  ({val.type})
                                </Text>
                              </Td>
                              <Td
                                border="none"
                                flex="4"
                                className="flex flex-col items-end gap-2 pl-10"
                              >
                                <Text>{val.description}</Text>
                                <Input
                                  type="text"
                                  border="1px solid gray"
                                  borderRadius={3}
                                  width="60%"
                                  height="30px"
                                />
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}
      </VStack>
    </Box>
  );
};

export default Project;
