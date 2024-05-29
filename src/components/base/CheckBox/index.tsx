interface ICheckBoxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode | string;
  id: string;
  className?: string;
}

const CheckBox = ({
  checked = false,
  onChange,
  label,
  id,
  className
}: ICheckBoxProps) => {
  return (
    <div className={`flex flex-row w-full gap-4 ${className}`}>
      <div className="w-auto">
        <input
          id={id}
          type="checkbox"
          defaultValue="remember"
          className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 block"
          required
          checked={checked}
          onChange={onChange}
        />
      </div>
      <div className="w-auto">
        <div className="flex items-center p-0 h-auto w-full">
          {typeof label === "string" ? (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-900 block pl-0 ml-0"
            >
              {label}
            </label>
          ) : (
            label
          )}
        </div>
      </div>
    </div>
  );
};
export default CheckBox;
