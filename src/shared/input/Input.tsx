import styles from './Style.module.scss';

interface InputProperties {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  label,
  placeholder,
  name,
  defaultValue,
  value,
  onChange
}: InputProperties) => {
  return (
    <div className={styles.input_container}>
      <span className={styles.label}>{label}</span>
      <input
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
