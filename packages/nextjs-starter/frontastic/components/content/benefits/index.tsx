import Rocket from "../../../../components/icons/rocket";
import Lock from "../../../../components/icons/lock";
import Loop from "../../../../components/icons/loop";
function Benefit({ icon = null, children, className = "" }) {
  return (
    <li
      className={`${className} flex flex-grow-0 w-full  h-14 md:h-24 items-center md:justify-center md:px-8 border-b md:border-b-0 md:border-r border-gray-200 `}
    >
      {icon}
      <span className="">{children}</span>
    </li>
  );
}

export default function Benefits() {
  return (
    <ul className="px-4 py-2 flex flex-col md:flex-row md:justify-items-stretch text-sm">
      <Benefit className="" icon={<Rocket className="mr-2 w-7" />}>
        Free & fast delivery
      </Benefit>
      <Benefit className="" icon={<Loop className="mr-3 w-6" />}>
        Free returns
      </Benefit>
      <Benefit
        className="border-opacity-0"
        icon={<Lock className="mr-3 w-6" />}
      >
        Safe payment and data protection
      </Benefit>
    </ul>
  );
}
