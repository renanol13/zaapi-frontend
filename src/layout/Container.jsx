import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.boxConteiner}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur
        ullam laborum accusantium suscipit. Dolore labore mollitia voluptatibus
        magnam possimus, voluptates expedita quisquam, natus deleniti itaque in,
        blanditiis obcaecati tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est facere neque similique exercitationem nobis provident. Quibusdam necessitatibus, molestias, id, voluptatum eum minima quasi fugit molestiae officiis laborum laudantium amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iure? Ipsam quasi et culpa similique aspernatur facilis hic voluptas laboriosam ratione. Placeat consequatur quasi voluptatibus blanditiis porro velit reprehenderit neque. 
      </p>
    </div>
  );
};

export default Container;
