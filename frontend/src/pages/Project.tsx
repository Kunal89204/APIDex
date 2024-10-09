import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Project: React.FC = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#FDC830] via-[#F37335] to-[#D93C7A]">
        Social Image
      </h1>

      <div>
        {/* Users Section */}
        <div>
          <h2 className="text-3xl font-semibold py-2">Users</h2>
          {/* Using type="multiple" so multiple accordions can be open */}
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="my-2 border px-2 border-gray-800 rounded-xl w-1/2">
              <AccordionTrigger className="flex justify-normal gap-2 items-center">
                <span className="border px-2 rounded-lg text-blue-400 border-blue-700 text-base font-semibold">
                  POST
                </span>
                | /v2/provider/<span className="text-base text-blue-400 border-blue-700">{`{clientId}`}</span>
              </AccordionTrigger>
              <AccordionContent>
                Creates a new user
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="my-2 border px-2 border-gray-800 rounded-xl w-1/2">
              <AccordionTrigger className="flex justify-normal gap-2 items-center">
                <span className="border px-2 rounded-lg text-green-400 border-green-700 text-base font-semibold">
                  GET
                </span>
                | /v2/provider/<span className="text-base text-green-400 border-green-700">{`{clientId}`}</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Posts Section */}
        <div>
          <h2 className="text-3xl font-semibold py-2">Posts</h2>
          <Accordion type="multiple">
            <AccordionItem value="item-3" className="my-2 border px-2 border-gray-800 rounded-xl w-1/2">
              <AccordionTrigger className="flex justify-normal gap-2 items-center hover:border-none">
                <span className="border px-2 rounded-lg text-blue-400 border-blue-700 text-base font-semibold">
                  POST
                </span>
                | /v2/provider/<span className="text-base text-blue-400 border-blue-700">{`{clientId}`}</span>
              </AccordionTrigger>
              <AccordionContent>
                Posts creation endpoint.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="my-2 border px-2 border-gray-800 rounded-xl w-1/2">
              <AccordionTrigger className="flex justify-normal gap-2 items-center">
                <span className="border px-2 rounded-lg text-green-400 border-green-700 text-base font-semibold">
                  GET
                </span>
                | /v2/provider/<span className="text-base text-green-400 border-green-700">{`{clientId}`}</span>
              </AccordionTrigger>
              <AccordionContent>
                Posts retrieval endpoint.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Project;
