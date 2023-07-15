import styles from './Style.module.scss';

interface IProperties {
  value: string;
  onClick?: () => void;
}
export const Submit = (properties: IProperties) => {
  const { value, onClick } = properties;

  return (
    <input
      type="submit"
      onClick={onClick}
      value={value}
      className={styles.submit}
    />
  );
};
