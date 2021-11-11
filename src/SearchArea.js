import React from "react";
import Videos from "./Videos";

function SearchArea(props) {
    const [keyword, setKeyword] = React.useState("");
    const [videos, setVideos] = React.useState([props.videos]);

   function submitHandler(e) {
        e.preventDefault();
        console.log("Searching for ", keyword,"...");
        let filterVideos = props.videos.filter(
            video => video.title.toLowerCase().includes(keyword.toLowerCase())
            );
        setVideos(filterVideos);
    }
    

        return (
            <div className="search-area">
                <form
                    onSubmit={submitHandler}
                    >
                    <label htmlFor="keyword">
                    Search 
                    <input
                        id="keyword"
                        value={keyword}
                        placeHolder="Search Keyword"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    </label>
                    <button>Submit</button>
                </form>
                <Videos videos={videos} />   
            </div>
        );
};

export default SearchArea;