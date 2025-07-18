import { useEffect, useState } from "react";
import axios from "axios";

const DailyQuote = () => {
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("https://zenquotes.io/api/today");
        if (res.data && res.data.length > 0) {
          const { q, a } = res.data[0];
          setQuote(`${q} — ${a}`);
        } else {
          setQuote("Stay curious. Stay inspired.");
        }
      } catch (error) {
        setQuote("Stay curious. Stay inspired.");
      }
    };

    fetchQuote();
  }, []);

  return <p className="text-gray-500 italic text-sm">{quote}</p>;
};

export default DailyQuote;
