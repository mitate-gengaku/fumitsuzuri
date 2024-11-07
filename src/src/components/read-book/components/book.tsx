import { forwardRef } from "react";

import { ContentArray } from "../types/type";

import { cn } from "@/utils/cn";
import { hexToRGB } from "@/utils/hex-to-rgb";

interface Props {
  color: string;
  opacity: string;
  onFlickPage: (index: number) => void;
  contentsData: {
    id: string;
    content: ContentArray[];
    refCallbackFunction: (node: HTMLDivElement | null) => void;
  }[];
  frontScreenshotUrl: string;
  backScreenshotUrl: string;
  zoom?: string;
}
export const Book = forwardRef<HTMLDivElement, Props>(
  (
    {
      color,
      opacity,
      onFlickPage,
      contentsData,
      frontScreenshotUrl,
      backScreenshotUrl,
      zoom,
    },
    ref,
  ) => {
    return (
      <div
        className="flex h-full w-full flex-col transition-all"
        style={{
          color: `${hexToRGB(color, opacity)}`,
          zoom: zoom,
        }}
      >
        {contentsData.map(({ id, content, refCallbackFunction }, index) => {
          if (index === 0 && content[0].content.length === 1) {
            const data = content[1].content;

            return (
              <div
                className={cn(
                  "flip relative [zoom:0.425] md:[zoom:0.725] lg:[zoom:1]",
                )}
                tabIndex={0}
                key={id}
                ref={refCallbackFunction}
                onClick={() => onFlickPage(index)}
              >
                <div
                  className={cn(
                    "absolute !right-0 h-[355px] w-[24px]",
                    'after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[""] after:[transform:rotateY(-180deg)]',
                  )}
                  style={{
                    background: frontScreenshotUrl
                      ? `url(${frontScreenshotUrl}) no-repeat`
                      : undefined,
                    backgroundPositionX: "-434px",
                  }}
                />
                <div
                  id="front"
                  ref={ref}
                  after-dynamic-value={data[17].content}
                  className={cn(
                    "relative cursor-pointer",
                    'before:absolute before:h-full before:w-full before:content-[""]',
                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                    data[17].isNeedIndent && "indent-after",
                    data[17].type === "h1" && "after:font-bold",
                  )}
                  style={{
                    background: frontScreenshotUrl
                      ? `url(${frontScreenshotUrl}) no-repeat`
                      : undefined,
                    backgroundPositionX: "-414px",
                  }}
                >
                  <div
                    after-dynamic-value={data[16].content}
                    className={cn(
                      "relative cursor-pointer bg-gray-800",
                      'before:absolute before:h-full before:w-full before:content-[""]',
                      "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                      data[16].isNeedIndent && "indent-after",
                      data[16].type === "h1" && "after:font-bold",
                    )}
                    style={{
                      background: frontScreenshotUrl
                        ? `url(${frontScreenshotUrl}) no-repeat`
                        : undefined,
                      backgroundPositionX: "-391px",
                    }}
                  >
                    <div
                      after-dynamic-value={data[15].content}
                      className={cn(
                        "relative cursor-pointer bg-gray-800",
                        'before:absolute before:h-full before:w-full before:content-[""]',
                        "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                        data[15].isNeedIndent && "indent-after",
                        data[15].type === "h1" && "after:font-bold",
                      )}
                      style={{
                        background: frontScreenshotUrl
                          ? `url(${frontScreenshotUrl}) no-repeat`
                          : undefined,
                        backgroundPositionX: "-368px",
                      }}
                    >
                      <div
                        after-dynamic-value={data[14].content}
                        className={cn(
                          "relative cursor-pointer bg-gray-800",
                          'before:absolute before:h-full before:w-full before:content-[""]',
                          "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                          data[14].isNeedIndent && "indent-after",
                          data[14].type === "h1" && "after:font-bold",
                        )}
                        style={{
                          background: frontScreenshotUrl
                            ? `url(${frontScreenshotUrl}) no-repeat`
                            : undefined,
                          backgroundPositionX: "-345px",
                        }}
                      >
                        <div
                          after-dynamic-value={data[13].content}
                          className={cn(
                            "relative cursor-pointer bg-gray-800",
                            'before:absolute before:h-full before:w-full before:content-[""]',
                            "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                            data[13].isNeedIndent && "indent-after",
                            data[13].type === "h1" && "after:font-bold",
                          )}
                          style={{
                            background: frontScreenshotUrl
                              ? `url(${frontScreenshotUrl}) no-repeat`
                              : undefined,
                            backgroundPositionX: "-322px",
                          }}
                        >
                          <div
                            after-dynamic-value={data[12].content}
                            className={cn(
                              "relative cursor-pointer bg-gray-800",
                              'before:absolute before:h-full before:w-full before:content-[""]',
                              "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                              data[12].isNeedIndent && "indent-after",
                              data[12].type === "h1" && "after:font-bold",
                            )}
                            style={{
                              background: frontScreenshotUrl
                                ? `url(${frontScreenshotUrl}) no-repeat`
                                : undefined,
                              backgroundPositionX: "-299px",
                            }}
                          >
                            <div
                              after-dynamic-value={data[11].content}
                              className={cn(
                                "relative cursor-pointer bg-gray-800",
                                'before:absolute before:h-full before:w-full before:content-[""]',
                                "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                data[11].isNeedIndent && "indent-after",
                                data[11].type === "h1" && "after:font-bold",
                              )}
                              style={{
                                background: frontScreenshotUrl
                                  ? `url(${frontScreenshotUrl}) no-repeat`
                                  : undefined,
                                backgroundPositionX: "-276px",
                              }}
                            >
                              <div
                                after-dynamic-value={data[10].content}
                                className={cn(
                                  "relative cursor-pointer bg-gray-800",
                                  'before:absolute before:h-full before:w-full before:content-[""]',
                                  "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                  data[10].isNeedIndent && "indent-after",
                                  data[10].type === "h1" && "after:font-bold",
                                )}
                                style={{
                                  background: frontScreenshotUrl
                                    ? `url(${frontScreenshotUrl}) no-repeat`
                                    : undefined,
                                  backgroundPositionX: "-253px",
                                }}
                              >
                                <div
                                  after-dynamic-value={data[9].content}
                                  className={cn(
                                    "relative cursor-pointer bg-gray-800",
                                    'before:absolute before:h-full before:w-full before:content-[""]',
                                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                    data[9].isNeedIndent && "indent-after",
                                    data[9].type === "h1" && "after:font-bold",
                                  )}
                                  style={{
                                    background: frontScreenshotUrl
                                      ? `url(${frontScreenshotUrl}) no-repeat`
                                      : undefined,
                                    backgroundPositionX: "-230px",
                                  }}
                                >
                                  <div
                                    after-dynamic-value={data[8].content}
                                    className={cn(
                                      "relative cursor-pointer bg-gray-800",
                                      'before:absolute before:h-full before:w-full before:content-[""]',
                                      "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                      data[8].isNeedIndent && "indent-after",
                                      data[8].type === "h1" &&
                                        "after:font-bold",
                                    )}
                                    style={{
                                      background: frontScreenshotUrl
                                        ? `url(${frontScreenshotUrl}) no-repeat`
                                        : undefined,
                                      backgroundPositionX: "-207px",
                                    }}
                                  >
                                    <div
                                      after-dynamic-value={data[7].content}
                                      className={cn(
                                        "relative cursor-pointer bg-gray-800",
                                        'before:absolute before:h-full before:w-full before:content-[""]',
                                        "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                        data[7].isNeedIndent && "indent-after",
                                        data[7].type === "h1" &&
                                          "after:font-bold",
                                      )}
                                      style={{
                                        background: frontScreenshotUrl
                                          ? `url(${frontScreenshotUrl}) no-repeat`
                                          : undefined,
                                        backgroundPositionX: "-184px",
                                      }}
                                    >
                                      <div
                                        after-dynamic-value={data[6].content}
                                        className={cn(
                                          "relative cursor-pointer bg-gray-800",
                                          'before:absolute before:h-full before:w-full before:content-[""]',
                                          "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                          data[6].isNeedIndent &&
                                            "indent-after",
                                          data[6].type === "h1" &&
                                            "after:font-bold",
                                        )}
                                        style={{
                                          background: frontScreenshotUrl
                                            ? `url(${frontScreenshotUrl}) no-repeat`
                                            : undefined,
                                          backgroundPositionX: "-161px",
                                        }}
                                      >
                                        <div
                                          after-dynamic-value={data[5].content}
                                          className={cn(
                                            "relative cursor-pointer bg-gray-800",
                                            'before:absolute before:h-full before:w-full before:content-[""]',
                                            "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                            data[5].isNeedIndent &&
                                              "indent-after",
                                            data[5].type === "h1" &&
                                              "after:font-bold",
                                          )}
                                          style={{
                                            background: frontScreenshotUrl
                                              ? `url(${frontScreenshotUrl}) no-repeat`
                                              : undefined,
                                            backgroundPositionX: "-138px",
                                          }}
                                        >
                                          <div
                                            after-dynamic-value={
                                              data[4].content
                                            }
                                            className={cn(
                                              "relative cursor-pointer bg-gray-800",
                                              'before:absolute before:h-full before:w-full before:content-[""]',
                                              "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                              data[4].isNeedIndent &&
                                                "indent-after",
                                              data[4].type === "h1" &&
                                                "after:font-bold",
                                            )}
                                            style={{
                                              background: frontScreenshotUrl
                                                ? `url(${frontScreenshotUrl}) no-repeat`
                                                : undefined,
                                              backgroundPositionX: "-115px",
                                            }}
                                          >
                                            <div
                                              after-dynamic-value={
                                                data[3].content
                                              }
                                              className={cn(
                                                "relative cursor-pointer bg-gray-800",
                                                'before:absolute before:h-full before:w-full before:content-[""]',
                                                "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                data[3].isNeedIndent &&
                                                  "indent-after",
                                                data[3].type === "h1" &&
                                                  "after:font-bold",
                                              )}
                                              style={{
                                                background: frontScreenshotUrl
                                                  ? `url(${frontScreenshotUrl}) no-repeat`
                                                  : undefined,
                                                backgroundPositionX: "-92px",
                                              }}
                                            >
                                              <div
                                                after-dynamic-value={
                                                  data[2].content
                                                }
                                                className={cn(
                                                  "relative cursor-pointer bg-gray-800",
                                                  'before:absolute before:h-full before:w-full before:content-[""]',
                                                  "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                  data[2].isNeedIndent &&
                                                    "indent-after",
                                                  data[2].type === "h1" &&
                                                    "after:font-bold",
                                                )}
                                                style={{
                                                  background: frontScreenshotUrl
                                                    ? `url(${frontScreenshotUrl}) no-repeat`
                                                    : undefined,
                                                  backgroundPositionX: "-69px",
                                                }}
                                              >
                                                <div
                                                  after-dynamic-value={
                                                    data[1].content
                                                  }
                                                  className={cn(
                                                    "relative cursor-pointer bg-gray-800",
                                                    'before:absolute before:h-full before:w-full before:content-[""]',
                                                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                    data[1].isNeedIndent &&
                                                      "indent-after",
                                                    data[1].type === "h1" &&
                                                      "after:font-bold",
                                                  )}
                                                  style={{
                                                    background:
                                                      frontScreenshotUrl
                                                        ? `url(${frontScreenshotUrl}) no-repeat`
                                                        : undefined,
                                                    backgroundPositionX:
                                                      "-46px",
                                                  }}
                                                >
                                                  <div
                                                    after-dynamic-value={
                                                      data[0].content
                                                    }
                                                    className={cn(
                                                      "relative cursor-pointer",
                                                      'before:absolute before:h-full before:w-full before:content-[""]',
                                                      "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                      data[0].isNeedIndent &&
                                                        "indent-after",
                                                      data[0].type === "h1" &&
                                                        "after:font-bold",
                                                    )}
                                                    style={{
                                                      background:
                                                        frontScreenshotUrl
                                                          ? `url(${frontScreenshotUrl}) no-repeat`
                                                          : undefined,
                                                      backgroundPositionX:
                                                        "-23px",
                                                    }}
                                                  >
                                                    <span className="absolute top-6 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [transform:rotateY(-180deg)] [writing-mode:vertical-lr] dark:text-gray-800">
                                                      {index + 1}
                                                    </span>
                                                    <div
                                                      className={cn(
                                                        'after:absolute after:block after:h-full after:w-full after:!bg-[#dfdac8] after:content-[""] after:[transform:rotateY(-180deg)]',
                                                      )}
                                                      style={{
                                                        background:
                                                          frontScreenshotUrl
                                                            ? `url(${frontScreenshotUrl}) no-repeat`
                                                            : undefined,
                                                        backgroundPositionX:
                                                          "-0px",
                                                      }}
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (
            index === contentsData.length - 1 &&
            content[1].content.length === 1
          ) {
            const data = content[0].content;

            return (
              <div
                className={cn(
                  "flip font-shippori-mincho relative [zoom:0.425] md:[zoom:0.725] lg:[zoom:1]",
                )}
                tabIndex={0}
                key={id}
                ref={refCallbackFunction}
                onClick={() => onFlickPage(index)}
              >
                <div
                  className={cn(
                    "!right[-24px] absolute h-[355px] w-[24px] [backface-visibility:hidden] [transform:rotateY(-180deg)]",
                  )}
                  style={{
                    background: backScreenshotUrl
                      ? `url(${backScreenshotUrl}) no-repeat`
                      : undefined,
                    backgroundPositionX: "-0px",
                  }}
                />
                <div
                  id="front"
                  ref={ref}
                  before-dynamic-value={data[0].content}
                  className={cn(
                    "relative cursor-pointer bg-gray-800",
                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                    data[0].isNeedIndent && "indent-before",
                    data[0].type === "h1" && "before:font-bold",
                  )}
                >
                  <span
                    className={cn(
                      "absolute block h-full w-[24px] [backface-visibility:hidden] [transform:rotateY(180deg)]",
                    )}
                    style={{
                      background: backScreenshotUrl
                        ? `url(${backScreenshotUrl}) no-repeat`
                        : undefined,
                      backgroundPositionX: "-23px",
                    }}
                  />
                  <div
                    before-dynamic-value={data[1].content}
                    className={cn(
                      "relative cursor-pointer bg-gray-800",
                      "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                      data[1].isNeedIndent && "indent-before",
                      data[1].type === "h1" && "before:font-bold",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute block h-full w-[24px] [backface-visibility:hidden] [transform:rotateY(180deg)]",
                      )}
                      style={{
                        background: backScreenshotUrl
                          ? `url(${backScreenshotUrl}) no-repeat`
                          : undefined,
                        backgroundPositionX: "-46px",
                      }}
                    />
                    <div
                      before-dynamic-value={data[2].content}
                      className={cn(
                        "relative cursor-pointer bg-gray-800",
                        "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                        data[2].isNeedIndent && "indent-before",
                        data[2].type === "h1" && "before:font-bold",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                        )}
                        style={{
                          background: backScreenshotUrl
                            ? `url(${backScreenshotUrl}) no-repeat`
                            : undefined,
                          backgroundPositionX: "-69px",
                        }}
                      />
                      <div
                        before-dynamic-value={data[3].content}
                        className={cn(
                          "relative cursor-pointer bg-gray-800",
                          "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                          data[3].isNeedIndent && "indent-before",
                          data[3].type === "h1" && "before:font-bold",
                        )}
                      >
                        <span
                          className={cn(
                            "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                          )}
                          style={{
                            background: backScreenshotUrl
                              ? `url(${backScreenshotUrl}) no-repeat`
                              : undefined,
                            backgroundPositionX: "-92px",
                          }}
                        />
                        <div
                          before-dynamic-value={data[4].content}
                          className={cn(
                            "relative cursor-pointer bg-gray-800",
                            "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                            data[4].isNeedIndent && "indent-before",
                            data[4].type === "h1" && "before:font-bold",
                          )}
                        >
                          <span
                            className={cn(
                              "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                            )}
                            style={{
                              background: backScreenshotUrl
                                ? `url(${backScreenshotUrl}) no-repeat`
                                : undefined,
                              backgroundPositionX: "-115px",
                            }}
                          />
                          <div
                            before-dynamic-value={data[5].content}
                            className={cn(
                              "relative cursor-pointer bg-gray-800",
                              "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                              data[5].isNeedIndent && "indent-before",
                              data[5].type === "h1" && "before:font-bold",
                            )}
                          >
                            <span
                              className={cn(
                                "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                              )}
                              style={{
                                background: backScreenshotUrl
                                  ? `url(${backScreenshotUrl}) no-repeat`
                                  : undefined,
                                backgroundPositionX: "-138px",
                              }}
                            />
                            <div
                              before-dynamic-value={data[6].content}
                              className={cn(
                                "relative cursor-pointer bg-gray-800",
                                "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                data[6].isNeedIndent && "indent-before",
                                data[6].type === "h1" && "before:font-bold",
                              )}
                            >
                              <span
                                className={cn(
                                  "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                )}
                                style={{
                                  background: backScreenshotUrl
                                    ? `url(${backScreenshotUrl}) no-repeat`
                                    : undefined,
                                  backgroundPositionX: "-161px",
                                }}
                              />
                              <div
                                before-dynamic-value={data[7].content}
                                className={cn(
                                  "relative cursor-pointer bg-gray-800",
                                  "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                  data[7].isNeedIndent && "indent-before",
                                  data[7].type === "h1" && "before:font-bold",
                                )}
                              >
                                <span
                                  className={cn(
                                    "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                  )}
                                  style={{
                                    background: backScreenshotUrl
                                      ? `url(${backScreenshotUrl}) no-repeat`
                                      : undefined,
                                    backgroundPositionX: "-184px",
                                  }}
                                />
                                <div
                                  before-dynamic-value={data[8].content}
                                  className={cn(
                                    "relative cursor-pointer bg-gray-800",
                                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                    data[8].isNeedIndent && "indent-before",
                                    data[8].type === "h1" && "before:font-bold",
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                    )}
                                    style={{
                                      background: backScreenshotUrl
                                        ? `url(${backScreenshotUrl}) no-repeat`
                                        : undefined,
                                      backgroundPositionX: "-207px",
                                    }}
                                  />
                                  <div
                                    before-dynamic-value={data[9].content}
                                    className={cn(
                                      "relative cursor-pointer bg-gray-800",
                                      "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                      data[9].isNeedIndent && "indent-before",
                                      data[9].type === "h1" &&
                                        "before:font-bold",
                                    )}
                                  >
                                    <span
                                      className={cn(
                                        "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                      )}
                                      style={{
                                        background: backScreenshotUrl
                                          ? `url(${backScreenshotUrl}) no-repeat`
                                          : undefined,
                                        backgroundPositionX: "-230px",
                                      }}
                                    />
                                    <div
                                      before-dynamic-value={data[10].content}
                                      className={cn(
                                        "relative cursor-pointer bg-gray-800",
                                        "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                        data[10].isNeedIndent &&
                                          "indent-before",
                                        data[10].type === "h1" &&
                                          "before:font-bold",
                                      )}
                                    >
                                      <span
                                        className={cn(
                                          "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                        )}
                                        style={{
                                          background: backScreenshotUrl
                                            ? `url(${backScreenshotUrl}) no-repeat`
                                            : undefined,
                                          backgroundPositionX: "-253px",
                                        }}
                                      />
                                      <div
                                        before-dynamic-value={data[11].content}
                                        className={cn(
                                          "relative cursor-pointer bg-gray-800",
                                          "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                          data[11].isNeedIndent &&
                                            "indent-before",
                                          data[11].type === "h1" &&
                                            "before:font-bold",
                                        )}
                                      >
                                        <span
                                          className={cn(
                                            "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                          )}
                                          style={{
                                            background: backScreenshotUrl
                                              ? `url(${backScreenshotUrl}) no-repeat`
                                              : undefined,
                                            backgroundPositionX: "-276px",
                                          }}
                                        />
                                        <div
                                          before-dynamic-value={
                                            data[12].content
                                          }
                                          className={cn(
                                            "relative cursor-pointer bg-gray-800",
                                            "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                            data[12].isNeedIndent &&
                                              "indent-before",
                                            data[12].type === "h1" &&
                                              "before:font-bold",
                                          )}
                                        >
                                          <span
                                            className={cn(
                                              "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                            )}
                                            style={{
                                              background: backScreenshotUrl
                                                ? `url(${backScreenshotUrl}) no-repeat`
                                                : undefined,
                                              backgroundPositionX: "-299px",
                                            }}
                                          />
                                          <div
                                            before-dynamic-value={
                                              data[13].content
                                            }
                                            className={cn(
                                              "relative cursor-pointer bg-gray-800",
                                              "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                              data[13].isNeedIndent &&
                                                "indent-before",
                                              data[13].type === "h1" &&
                                                "before:font-bold",
                                            )}
                                          >
                                            <span
                                              className={cn(
                                                "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                              )}
                                              style={{
                                                background: backScreenshotUrl
                                                  ? `url(${backScreenshotUrl}) no-repeat`
                                                  : undefined,
                                                backgroundPositionX: "-322px",
                                              }}
                                            />
                                            <div
                                              before-dynamic-value={
                                                data[14].content
                                              }
                                              className={cn(
                                                "relative cursor-pointer bg-gray-800",
                                                "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                data[14].isNeedIndent &&
                                                  "indent-before",
                                                data[14].type === "h1" &&
                                                  "before:font-bold",
                                              )}
                                            >
                                              <span
                                                className={cn(
                                                  "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                                )}
                                                style={{
                                                  background: backScreenshotUrl
                                                    ? `url(${backScreenshotUrl}) no-repeat`
                                                    : undefined,
                                                  backgroundPositionX: "-345px",
                                                }}
                                              />
                                              <div
                                                before-dynamic-value={
                                                  data[15].content
                                                }
                                                className={cn(
                                                  "relative cursor-pointer bg-gray-800",
                                                  "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                  data[15].isNeedIndent &&
                                                    "indent-before",
                                                  data[15].type === "h1" &&
                                                    "before:font-bold",
                                                )}
                                              >
                                                <span
                                                  className={cn(
                                                    "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                                  )}
                                                  style={{
                                                    background:
                                                      backScreenshotUrl
                                                        ? `url(${backScreenshotUrl}) no-repeat`
                                                        : undefined,
                                                    backgroundPositionX:
                                                      "-368px",
                                                  }}
                                                />
                                                <div
                                                  before-dynamic-value={
                                                    data[16].content
                                                  }
                                                  className={cn(
                                                    "relative cursor-pointer bg-gray-800",
                                                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                    data[16].isNeedIndent &&
                                                      "indent-before",
                                                    data[16].type === "h1" &&
                                                      "before:font-bold",
                                                  )}
                                                >
                                                  <span
                                                    className={cn(
                                                      "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                                    )}
                                                    style={{
                                                      background:
                                                        backScreenshotUrl
                                                          ? `url(${backScreenshotUrl}) no-repeat`
                                                          : undefined,
                                                      backgroundPositionX:
                                                        "-391px",
                                                    }}
                                                  />
                                                  <div
                                                    before-dynamic-value={
                                                      data[17].content
                                                    }
                                                    className={cn(
                                                      "relative cursor-pointer bg-gray-800",
                                                      "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                      data[17].isNeedIndent &&
                                                        "indent-before",
                                                      data[17].type === "h1" &&
                                                        "before:font-bold",
                                                    )}
                                                  >
                                                    <span
                                                      className={cn(
                                                        "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                                      )}
                                                      style={{
                                                        background:
                                                          backScreenshotUrl
                                                            ? `url(${backScreenshotUrl}) no-repeat`
                                                            : undefined,
                                                        backgroundPositionX:
                                                          "-414px",
                                                      }}
                                                    />
                                                    <span className="absolute top-6 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [writing-mode:vertical-lr] dark:text-gray-800">
                                                      {contentsData.length > 2
                                                        ? contentsData.length +
                                                          1
                                                        : contentsData.length}
                                                    </span>
                                                    <div>
                                                      <span
                                                        className={cn(
                                                          "absolute block h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
                                                        )}
                                                        style={{
                                                          background:
                                                            backScreenshotUrl
                                                              ? `url(${backScreenshotUrl}) no-repeat`
                                                              : undefined,
                                                          backgroundPositionX:
                                                            "-434px",
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div
              className="flip relative [zoom:0.425] md:[zoom:0.725] lg:[zoom:1]"
              tabIndex={0}
              key={id}
              ref={refCallbackFunction}
              onClick={() => onFlickPage(index)}
            >
              <div
                id="front"
                ref={ref}
                before-dynamic-value={content[0].content[0].content}
                after-dynamic-value={content[1].content[17].content}
                className={cn(
                  "relative cursor-pointer bg-gray-800",
                  "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                  "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                  content[0].content[0].isNeedIndent && "indent-before",
                  content[1].content[17].isNeedIndent && "indent-after",
                  content[0].content[0].type === "h1" && "before:font-bold",
                  content[1].content[17].type === "h1" && "after:font-bold",
                )}
              >
                <div
                  before-dynamic-value={content[0].content[1].content}
                  after-dynamic-value={content[1].content[16].content}
                  className={cn(
                    "relative cursor-pointer bg-gray-800",
                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                    content[0].content[1].isNeedIndent && "indent-before",
                    content[1].content[16].isNeedIndent && "indent-after",
                    content[0].content[1].type === "h1" && "before:font-bold",
                    content[1].content[16].type === "h1" && "after:font-bold",
                  )}
                >
                  <div
                    before-dynamic-value={content[0].content[2].content}
                    after-dynamic-value={content[1].content[15].content}
                    className={cn(
                      "relative cursor-pointer bg-gray-800",
                      "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                      "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                      content[0].content[2].isNeedIndent && "indent-before",
                      content[1].content[15].isNeedIndent && "indent-after",
                      content[0].content[2].type === "h1" && "before:font-bold",
                      content[1].content[15].type === "h1" && "after:font-bold",
                    )}
                  >
                    <div
                      before-dynamic-value={content[0].content[3].content}
                      after-dynamic-value={content[1].content[14].content}
                      className={cn(
                        "relative cursor-pointer bg-gray-800",
                        "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                        "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                        content[0].content[3].isNeedIndent && "indent-before",
                        content[1].content[14].isNeedIndent && "indent-after",
                        content[0].content[3].type === "h1" &&
                          "before:font-bold",
                        content[1].content[14].type === "h1" &&
                          "after:font-bold",
                      )}
                    >
                      <div
                        before-dynamic-value={content[0].content[4].content}
                        after-dynamic-value={content[1].content[13].content}
                        className={cn(
                          "relative cursor-pointer bg-gray-800",
                          "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                          "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                          content[0].content[4].isNeedIndent && "indent-before",
                          content[1].content[13].isNeedIndent && "indent-after",
                          content[0].content[4].type === "h1" &&
                            "before:font-bold",
                          content[1].content[13].type === "h1" &&
                            "after:font-bold",
                        )}
                      >
                        <div
                          before-dynamic-value={content[0].content[5].content}
                          after-dynamic-value={content[1].content[12].content}
                          className={cn(
                            "relative cursor-pointer bg-gray-800",
                            "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                            "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                            content[0].content[5].isNeedIndent &&
                              "indent-before",
                            content[1].content[12].isNeedIndent &&
                              "indent-after",
                            content[0].content[5].type === "h1" &&
                              "before:font-bold",
                            content[1].content[12].type === "h1" &&
                              "after:font-bold",
                          )}
                        >
                          <div
                            before-dynamic-value={content[0].content[6].content}
                            after-dynamic-value={content[1].content[11].content}
                            className={cn(
                              "relative cursor-pointer bg-gray-800",
                              "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                              "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                              content[0].content[6].isNeedIndent &&
                                "indent-before",
                              content[1].content[11].isNeedIndent &&
                                "indent-after",
                              content[0].content[6].type === "h1" &&
                                "before:font-bold",
                              content[1].content[11].type === "h1" &&
                                "after:font-bold",
                            )}
                          >
                            <div
                              before-dynamic-value={
                                content[0].content[7].content
                              }
                              after-dynamic-value={
                                content[1].content[10].content
                              }
                              className={cn(
                                "relative cursor-pointer bg-gray-800",
                                "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                content[0].content[7].isNeedIndent &&
                                  "indent-before",
                                content[1].content[10].isNeedIndent &&
                                  "indent-after",
                                content[0].content[7].type === "h1" &&
                                  "before:font-bold",
                                content[1].content[10].type === "h1" &&
                                  "after:font-bold",
                              )}
                            >
                              <div
                                before-dynamic-value={
                                  content[0].content[8].content
                                }
                                after-dynamic-value={
                                  content[1].content[9].content
                                }
                                className={cn(
                                  "relative cursor-pointer bg-gray-800",
                                  "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                  "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                  content[0].content[8].isNeedIndent &&
                                    "indent-before",
                                  content[1].content[9].isNeedIndent &&
                                    "indent-after",
                                  content[0].content[8].type === "h1" &&
                                    "before:font-bold",
                                  content[1].content[9].type === "h1" &&
                                    "after:font-bold",
                                )}
                              >
                                <div
                                  before-dynamic-value={
                                    content[0].content[9].content
                                  }
                                  after-dynamic-value={
                                    content[1].content[8].content
                                  }
                                  className={cn(
                                    "relative cursor-pointer bg-gray-800",
                                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                    content[0].content[9].isNeedIndent &&
                                      "indent-before",
                                    content[1].content[8].isNeedIndent &&
                                      "indent-after",
                                    content[0].content[9].type === "h1" &&
                                      "before:font-bold",
                                    content[1].content[8].type === "h1" &&
                                      "after:font-bold",
                                  )}
                                >
                                  <div
                                    before-dynamic-value={
                                      content[0].content[10].content
                                    }
                                    after-dynamic-value={
                                      content[1].content[7].content
                                    }
                                    className={cn(
                                      "relative cursor-pointer bg-gray-800",
                                      "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                      "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                      content[0].content[10].isNeedIndent &&
                                        "indent-before",
                                      content[1].content[7].isNeedIndent &&
                                        "indent-after",
                                      content[0].content[10].type === "h1" &&
                                        "before:font-bold",
                                      content[1].content[7].type === "h1" &&
                                        "after:font-bold",
                                    )}
                                  >
                                    <div
                                      before-dynamic-value={
                                        content[0].content[11].content
                                      }
                                      after-dynamic-value={
                                        content[1].content[6].content
                                      }
                                      className={cn(
                                        "relative cursor-pointer bg-gray-800",
                                        "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                        "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                        content[0].content[11].isNeedIndent &&
                                          "indent-before",
                                        content[1].content[6].isNeedIndent &&
                                          "indent-after",
                                        content[0].content[11].type === "h1" &&
                                          "before:font-bold",
                                        content[1].content[6].type === "h1" &&
                                          "after:font-bold",
                                      )}
                                    >
                                      <div
                                        before-dynamic-value={
                                          content[0].content[12].content
                                        }
                                        after-dynamic-value={
                                          content[1].content[5].content
                                        }
                                        className={cn(
                                          "relative cursor-pointer bg-gray-800",
                                          "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                          "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                          content[0].content[12].isNeedIndent &&
                                            "indent-before",
                                          content[1].content[5].isNeedIndent &&
                                            "indent-after",
                                          content[0].content[12].type ===
                                            "h1" && "before:font-bold",
                                          content[1].content[5].type === "h1" &&
                                            "after:font-bold",
                                        )}
                                      >
                                        <div
                                          before-dynamic-value={
                                            content[0].content[13].content
                                          }
                                          after-dynamic-value={
                                            content[1].content[4].content
                                          }
                                          className={cn(
                                            "relative cursor-pointer bg-gray-800",
                                            "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                            "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                            content[0].content[13]
                                              .isNeedIndent && "indent-before",
                                            content[1].content[4]
                                              .isNeedIndent && "indent-after",
                                            content[0].content[13].type ===
                                              "h1" && "before:font-bold",
                                            content[1].content[4].type ===
                                              "h1" && "after:font-bold",
                                          )}
                                        >
                                          <div
                                            before-dynamic-value={
                                              content[0].content[14].content
                                            }
                                            after-dynamic-value={
                                              content[1].content[3].content
                                            }
                                            className={cn(
                                              "relative cursor-pointer bg-gray-800",
                                              "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                              "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                              content[0].content[14]
                                                .isNeedIndent &&
                                                "indent-before",
                                              content[1].content[3]
                                                .isNeedIndent && "indent-after",
                                              content[0].content[14].type ===
                                                "h1" && "before:font-bold",
                                              content[1].content[3].type ===
                                                "h1" && "after:font-bold",
                                            )}
                                          >
                                            <div
                                              before-dynamic-value={
                                                content[0].content[15].content
                                              }
                                              after-dynamic-value={
                                                content[1].content[2].content
                                              }
                                              className={cn(
                                                "relative cursor-pointer bg-gray-800",
                                                "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                content[0].content[15]
                                                  .isNeedIndent &&
                                                  "indent-before",
                                                content[1].content[2]
                                                  .isNeedIndent &&
                                                  "indent-after",
                                                content[0].content[15].type ===
                                                  "h1" && "before:font-bold",
                                                content[1].content[2].type ===
                                                  "h1" && "after:font-bold",
                                              )}
                                            >
                                              <div
                                                before-dynamic-value={
                                                  content[0].content[16].content
                                                }
                                                after-dynamic-value={
                                                  content[1].content[1].content
                                                }
                                                className={cn(
                                                  "relative cursor-pointer bg-gray-800",
                                                  "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                  "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                  content[0].content[16]
                                                    .isNeedIndent &&
                                                    "indent-before",
                                                  content[1].content[1]
                                                    .isNeedIndent &&
                                                    "indent-after",
                                                  content[0].content[16]
                                                    .type === "h1" &&
                                                    "before:font-bold",
                                                  content[1].content[1].type ===
                                                    "h1" && "after:font-bold",
                                                )}
                                              >
                                                <div
                                                  before-dynamic-value={
                                                    content[0].content[17]
                                                      .content
                                                  }
                                                  after-dynamic-value={
                                                    content[1].content[0]
                                                      .content
                                                  }
                                                  className={cn(
                                                    "relative cursor-pointer bg-gray-800",
                                                    "before:absolute before:h-full before:content-[attr(before-dynamic-value)]",
                                                    "after:absolute after:h-full after:w-full after:!bg-[#dfdac8] after:content-[attr(after-dynamic-value)] after:[transform:rotateY(-180deg)]",
                                                    content[0].content[17]
                                                      .isNeedIndent &&
                                                      "indent-before",
                                                    content[1].content[0]
                                                      .isNeedIndent &&
                                                      "indent-after",
                                                    content[0].content[17]
                                                      .type === "h1" &&
                                                      "before:font-bold",
                                                    content[1].content[0]
                                                      .type === "h1" &&
                                                      "after:font-bold",
                                                  )}
                                                >
                                                  <span className="absolute top-6 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [writing-mode:vertical-lr] dark:text-gray-800">
                                                    {index + 1 === 2
                                                      ? index + 1
                                                      : index + 2}
                                                  </span>
                                                  <span className="absolute top-6 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [transform:rotateY(-180deg)] [writing-mode:vertical-lr] dark:text-gray-800">
                                                    {index + 2}
                                                  </span>
                                                  <div></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

Book.displayName = "Book";
