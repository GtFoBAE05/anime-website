import styles from "./homecss.module.css";
import PopularSectionItem from "./PopularSectionItem.jsx";

const PopularSectionList = (props) => {
  return (
      <div>
          <div>
              <h1>{props.headline}</h1>
              <div className={styles.animePosterContainer}>
                  {props.itemList.map(function (item) {
                      return (
                          <PopularSectionItem
                              key={item.mal_id}
                              type= {props.type}
                              id={item.mal_id}
                              title={item.title}
                          />
                      );
                  })}
              </div>
          </div>
      </div>
  )
}

export default PopularSectionList;