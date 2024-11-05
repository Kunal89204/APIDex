import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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

  const endpointsSchema = [
    {
      collectionName: "Users",
      endpoints: [
        {
          requestType: "POST",
          endpoint: "/v2/oauth-clients/{clientId}/users",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          pathParameters: [
            {
              name: "clientId",
              type: "string",
              required: true,
              description: "Unique identifier for the OAuth client.",
            },
          ],
          body: {
            type: "object",
            required: true,
            fields: [
              {
                name: "email",
                type: "string",
                required: true,
                placeholder: "Enter email",
                description: "The email address of the user.",
              },
              {
                name: "name",
                type: "string",
                required: true,
                placeholder: "Enter name",
                description: "The name of the user.",
              },
              {
                name: "timeFormat",
                type: "enum",
                required: false,
                options: ["12", "24"],
                description: "The preferred time format for the user.",
              },
              {
                name: "weekStart",
                type: "enum",
                required: false,
                options: ["Monday", "Sunday"],
                description: "The day of the week on which the week starts.",
              },
              {
                name: "timeZone",
                type: "string",
                required: false,
                placeholder: "Enter timeZone",
                description: "The timezone of the user.",
              },
              {
                name: "locale",
                type: "enum",
                required: false,
                options: ["en-US", "en-GB", "fr-FR", "es-ES"],
                description: "The locale of the user.",
              },
            ],
          },
        },
        {
          requestType: "GET",
          endpoint: "/v2/oauth-clients/{clientId}/users/{userId}",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          pathParameters: [
            {
              name: "clientId",
              type: "string",
              required: true,
              description: "Unique identifier for the OAuth client.",
            },
            {
              name: "userId",
              type: "string",
              required: true,
              description: "Unique identifier for the user.",
            },
          ],
        },
      ],
    },
    {
      collectionName: "Products",
      endpoints: [
        {
          requestType: "POST",
          endpoint: "/v2/products",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          body: {
            type: "object",
            required: true,
            fields: [
              {
                name: "name",
                type: "string",
                required: true,
                placeholder: "Enter product name",
                description: "The name of the product.",
              },
              {
                name: "description",
                type: "string",
                required: false,
                placeholder: "Enter product description",
                description: "Detailed description of the product.",
              },
              {
                name: "price",
                type: "number",
                required: true,
                placeholder: "Enter product price",
                description: "Price of the product.",
              },
              {
                name: "category",
                type: "string",
                required: true,
                placeholder: "Enter category",
                description: "Category the product belongs to.",
              },
              {
                name: "stock",
                type: "number",
                required: true,
                placeholder: "Enter stock quantity",
                description: "Quantity available in stock.",
              },
            ],
          },
        },
        {
          requestType: "GET",
          endpoint: "/v2/products/{productId}",
          authorization: {
            type: "Bearer Token",
            required: false,
          },
          pathParameters: [
            {
              name: "productId",
              type: "string",
              required: true,
              description: "Unique identifier for the product.",
            },
          ],
        },
      ],
    },
    {
      collectionName: "Orders",
      endpoints: [
        {
          requestType: "POST",
          endpoint: "/v2/orders",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          body: {
            type: "object",
            required: true,
            fields: [
              {
                name: "productId",
                type: "string",
                required: true,
                placeholder: "Enter product ID",
                description: "The ID of the product being ordered.",
              },
              {
                name: "quantity",
                type: "number",
                required: true,
                placeholder: "Enter quantity",
                description: "Quantity of the product ordered.",
              },
              {
                name: "shippingAddress",
                type: "string",
                required: true,
                placeholder: "Enter shipping address",
                description: "The address where the order will be shipped.",
              },
              {
                name: "paymentMethod",
                type: "enum",
                required: true,
                options: ["Credit Card", "PayPal", "Bank Transfer"],
                description: "The payment method chosen by the customer.",
              },
            ],
          },
        },
        {
          requestType: "GET",
          endpoint: "/v2/orders/{orderId}",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          pathParameters: [
            {
              name: "orderId",
              type: "string",
              required: true,
              description: "Unique identifier for the order.",
            },
          ],
        },
        {
          requestType: "PUT",
          endpoint: "/v2/orders/{orderId}",
          authorization: {
            type: "Bearer Token",
            required: true,
          },
          pathParameters: [
            {
              name: "orderId",
              type: "string",
              required: true,
              description: "Unique identifier for the order.",
            },
          ],
          body: {
            type: "object",
            required: true,
            fields: [
              {
                name: "status",
                type: "enum",
                required: true,
                options: ["Pending", "Shipped", "Delivered", "Cancelled"],
                description: "The status of the order.",
              },
            ],
          },
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
        {endpointsSchema &&
          endpointsSchema.map((endpoint, i) => (
            <Box key={i}>
              <Heading as="h2" size="lg" mb={4}>
                {endpoint.collectionName}
              </Heading>
              <Accordion allowMultiple>
                {endpoint.endpoints.map((el, i) => (
                  <AccordionItem
                    key={i}
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
                              el.requestType === "POST"
                                ? "blue"
                                : el.requestType === "GET"
                                ? "green"
                                : el?.requestType === "PATCH"
                                ? "orange"
                                : el.requestType === "DELETE"
                                ? "red"
                                : "gray" // Default color if no match
                            }
                          >
                            {el.requestType}
                          </Tag>

                          <Text as="span">
                            {/* the weirdest code i have ever written 🤣 */}
                            {`| ${el.endpoint.replace(/\/\{[^}]+\}/g, "")}`}/
                            {el.pathParameters && el.pathParameters.filter(
                              (param) => param.type === "params"
                            ).length > 0
                              ? `{ ${el.pathParameters
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
                      <Text mb={4}>Creates a new user</Text>

                      <Accordion allowMultiple>
                        {el.authorization && (
                          <AccordionItem
                            borderWidth="1px"
                            borderColor="gray.700"
                            rounded="xl"
                            w="30vw"
                            mb={4}
                          >
                            <h2>
                              <AccordionButton
                                display={"flex"}
                                justifyContent={"space-between"}
                              >
                                Authorization
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel>
                              <fieldset
                                style={{
                                  border: "2px solid gray",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                <legend
                                  style={{
                                    padding: "0 10px",
                                    fontWeight: "bold",
                                    color: "white",
                                  }}
                                >
                                  Personal Information
                                </legend>

                                <Input placeholder="Enter your name" />
                              </fieldset>
                            </AccordionPanel>
                          </AccordionItem>
                        )}

                        {el.pathParameters &&
                          el.pathParameters.map((newel, i) => (
                            <AccordionItem
                            key={i}
                              borderWidth="1px"
                              borderColor="gray.700"
                              rounded="xl"
                              w="30vw"
                              mb={4}
                            >
                              <h2>
                                <AccordionButton
                                  display={"flex"}
                                  justifyContent={"space-between"}
                                >
                                  Path
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel>
                                <fieldset
                                  style={{
                                    border: "2px solid gray",
                                    padding: "10px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <legend
                                    style={{
                                      padding: "0 10px",
                                      fontWeight: "bold",
                                      color: "white",
                                    }}
                                  >
                                    {newel.name}
                                  </legend>

                                  <Input placeholder="Enter your name" />
                                </fieldset>
                              </AccordionPanel>
                            </AccordionItem>
                          ))}

                        <AccordionItem
                         
                          borderWidth="1px"
                          borderColor="gray.700"
                          rounded="xl"
                          w="30vw"
                          mb={4}
                        >
                          <h2>
                            <AccordionButton
                              display={"flex"}
                              justifyContent={"space-between"}
                            >
                              Body
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            {el?.body?.fields.map((el, i) => (
                              <fieldset
                              key={i}
                                style={{
                                  border: "2px solid gray",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                <legend
                                  style={{
                                    padding: "0 10px",
                                    fontWeight: "bold",
                                    color: "white",
                                  }}
                                >
                                  {el.name} {el.type}
                                </legend>

                                <Input placeholder={el.placeholder} />
                              </fieldset>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}

        {/* Posts Section */}
        
      </VStack>
    </Box>
  );
};

export default Project;
