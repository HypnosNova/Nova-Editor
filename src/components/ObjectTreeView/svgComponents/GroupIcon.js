import React from "react";
import { Icon } from "antd";

const GroupSVG = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path
        d="M512 704.1c-4.7 0-9.4-1-13.8-3.1l-352-168.1c-11.2-5.4-18.3-16.7-18.2-29.2 0.1-12.4 7.4-23.7 18.8-28.8l88-40c16.1-7.3 35.1-0.2 42.4 15.9 7.3 16.1 0.2 35.1-15.9 42.4l-25.5 11.6L512 636.6l276.2-131.9-21.1-9.6c-16.1-7.3-23.2-26.3-15.9-42.4 7.3-16.1 26.3-23.2 42.4-15.9l83.7 38c11.3 5.1 18.6 16.4 18.8 28.8 0.1 12.4-7 23.8-18.2 29.2l-352 168.1c-4.5 2.1-9.2 3.2-13.9 3.2z"
        p-id="7967"
      />
      <path
        d="M512 896.1c-4.7 0-9.4-1-13.8-3.1l-352-168.1c-11.2-5.4-18.3-16.7-18.2-29.2 0.1-12.4 7.4-23.7 18.8-28.8l88-40c16.1-7.3 35.1-0.2 42.4 15.9 7.3 16.1 0.2 35.1-15.9 42.4l-25.5 11.6L512 828.6l276.2-131.9-21.1-9.6c-16.1-7.3-23.2-26.3-15.9-42.4 7.3-16.1 26.3-23.2 42.4-15.9l83.7 38c11.3 5.1 18.6 16.4 18.8 28.8 0.1 12.4-7 23.8-18.2 29.2l-352 168.1c-4.5 2.1-9.2 3.2-13.9 3.2zM512.1 515c-4.5 0-9.1-1-13.3-2.9l-8.6-3.9c-0.1-0.1-0.2-0.1-0.3-0.2L146.4 346.5c-11.3-5.3-18.5-16.8-18.4-29.3 0.1-12.5 7.5-23.8 18.9-28.9l352-157.5c8.3-3.7 17.8-3.7 26.1 0l352 157.5c11.4 5.1 18.8 16.4 18.9 28.9 0.1 12.5-7.1 23.9-18.4 29.3L534.2 508c-0.1 0-0.1 0.1-0.2 0.1l-8.5 3.9c-4.3 2-8.8 3-13.4 3z m8.5-35.9zM236.7 318.3L512 447.7l275.3-129.5L512 195.1 236.7 318.3z"
        p-id="7968"
      />
    </svg>
  );
};

export default function GroupIcon(props) {
  return <Icon component={GroupSVG} {...props} />;
}
