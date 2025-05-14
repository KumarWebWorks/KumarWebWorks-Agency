import FadeIn, { FadeInStagger } from "./FadeIn";
import Border from "./Border";
import clsx from "clsx";
import Button from "./Button";

const List = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-sm text-neutral-600  tracking-wide", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

export const ListItem = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="text-base font-medium text-neutral-950">{`${title}. `} <br/> </strong>
          )}
          <span className="text-sm">
           {children}
          </span>
          {/* <Button className={" block my-4 float-right"}>See More</Button> */}
        </Border>
        
      </FadeIn>
    </li>
  );
};

export default List;
