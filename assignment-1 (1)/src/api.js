import { useEffect, useState } from "react";

const API_KEY = "";

/*The function that fetchs the URL and returns
 data for the rows */
export function useVolcanoList() {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVolcanoList()
      .then((volcanoList) => {
        setRowData(volcanoList);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, []);

  return {
    loading,
    rowData,
    error
  };
}

function getVolcanoList() {
  return fetch('https://openlibrary.org/subjects/drama.json?published_in=2000')
      .then((res) => res.json())
      .then((data) => data.works)
      .then((works) =>
        works.map((work) => {
          return {
            title: work.title,
            author: work.authors[0].name,
            editionCount: work.edition_count,
            id: work.cover_id
          };
        })
      )
  }