"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Badge } from "@nextui-org/badge";
import { motion } from "framer-motion";
import { Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import {
  ReactionBarSelector,
  ReactionCounter,
} from "@charkour/react-reactions";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

export function ChatWindow() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="flex relative flex-col items-center h-[100vh-64px] w-full">
      <div className="text-4xl w-full text-slate-700 font-bold p-3 px-8 border-b border-slate-300 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="lg"
            />
          </Badge>
          John Doe
          <Button
            variant="bordered"
            size="md"
            className="text-2xl text-slate-500 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            Files
          </Button>
          <Tooltip content="Add to Conversation" placement="bottom">
            <Button isIconOnly variant="light" className="text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="h-full flex flex-col gap-2 overflow-y-scroll container-snap w-full max-w-4xl px-1 py-2">
        <div className="flex items-start gap-2">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="md"
            />
          </Badge>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-500">John Doe</p>
            <p className="bg-lavender_(web) p-2 px-5 rounded-t-md ">
              We need a break
            </p>
            <p className="bg-lavender_(web) p-2 px-4 rounded-b-md ">
              It is late at night
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-start gap-2 just">
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm text-slate-500">John Doe</p>
              <div className="group relative flex flex-col items-end">
                <motion.div className="z-[999] absolute translate-y-[-80%] group-hover:flex gap-2 hidden">
                  <ReactionBarSelector iconSize={25} />
                </motion.div>
                <div className="flex flex-row-reverse gap-1">
                  <p className="bg-gray-200 p-2 px-5 rounded-t-md  max-w-[95%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, fugiat labore unde inventore voluptatum rerum ipsum
                    sed similique nesciunt ad, enim dolore facere accusamus iste
                    doloribus qui vitae amet ab.
                  </p>
                  <div className="hidden group-hover:inline-block">
                    <Tooltip content="Delete" placement="top">
                      <Button
                        isIconOnly
                        variant="light"
                        size="sm"
                        color="danger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1="10" x2="10" y1="11" y2="17" />
                          <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                      </Button>
                    </Tooltip>
                  </div>
                </div>

                <p>
                  <ReactionCounter
                    reactions={[
                      {
                        node: <>🗿</>, // String emoji reaction
                        by: "case",
                        label: "",
                      },
                    ]}
                  />
                </p>
              </div>
              <p className="bg-gray-200 p-2 px-4 flex gap-2 items-center italic max-w-[95%]">
                This message has been deleted.
                <Button
                  variant="light"
                  className="text-lavender_(web)-400 text-medium font-semibold"
                  size="sm"
                >
                  Undo
                </Button>
              </p>
              <p className="bg-gray-200 p-2 px-4 rounded-b-md  max-w-[95%]">
                It is late at night
              </p>
              <p className="text-lavender_(web)-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </p>
              <p className="text-lavender_(web)-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </p>
            </div>
            <Badge
              content=""
              color="success"
              shape="circle"
              placement="bottom-right"
            >
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                size="md"
              />
            </Badge>
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full max-w-3xl fixed z-10 p-4 flex flex-col gap-0.5">
        <div className="flex items-center gap-1">
          <Popover placement="top" showArrow>
            <PopoverTrigger>
              <Button
                isIconOnly
                variant="light"
                title="Attach file"
                size="sm"
                radius="full"
                className="text-savoy_blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <ul className="py-2">
                <li>
                  <Button
                    variant="light"
                    fullWidth
                    startContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                    }
                  >
                    Upload from this device
                  </Button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
          <Tooltip content="Emoji" placement="top">
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              className="text-savoy_blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                <path d="m14 7 3 3" />
                <path d="M5 6v4" />
                <path d="M19 14v4" />
                <path d="M10 2v2" />
                <path d="M7 8H3" />
                <path d="M21 16h-4" />
                <path d="M11 3H9" />
              </svg>
            </Button>
          </Tooltip>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            radius="full"
            className="text-savoy_blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
          </Button>
          <Popover placement="top">
            <PopoverTrigger>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                radius="full"
                className="text-savoy_blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-transparent border-none shadow-none outline-none">
              <Picker
                data={data}
                previewPosition={"none"}
                skinTonePosition={"none"}
                onEmojiSelect={console.log}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="gap-1 flex items-center justify-center">
          <Textarea
            variant="underlined"
            minRows={1}
            size="lg"
            classNames={{
              innerWrapper: "px-2 flex flex-col gap-1",
              input: "text-slate-700  text-lg",
            }}
            startContent={
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-medium text-savoy_blue-600 p-1 h-fit"
                >
                  Formal
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-medium text-savoy_blue-600 p-1 h-fit"
                >
                  Humorous
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  className="text-sm border-1 font-medium text-savoy_blue-600 p-1 h-fit"
                >
                  Passionate
                </Button>
              </div>
            }
            endContent={
              <div className="flex items-center gap-2 bg-gray-100 text-gray-400 rounded-md border border-gray-200 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                </svg>
                <ul>
                  <li className="text-sm font-bold text-gray-700">
                    File Name.txt
                  </li>
                  <li className="text-xs text-gray-600">2MB</li>
                </ul>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>
            }
            className="h-fit shadow-sm shadow-alice_blue border border-slate-300 rounded-t-md"
            placeholder="Type a new message"
          />
          <Button
            isIconOnly
            variant="light"
            size="lg"
            className="text-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 3 3 9-3 9 19-9Z" />
              <path d="M6 12h16" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
