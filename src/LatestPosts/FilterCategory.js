import React from "react";
import { FaFilter } from 'react-icons/fa';
import "./FilterCategory.css"
function FilterCategory() {
    return (
        <>
            <h2 class="trending-post">Latest Posts</h2>
            <div class="filter">
                <FaFilter color={"Blue"} />
                <p>Filter by Category</p>
            </div>
            <div id="categories-container">
                <div class="categories">All</div>
                <div class="categories">Artificial Intelligence</div>
                <div class="categories">Cloud Computing</div>
                <div class="categories">DevOps</div>
                <div class="categories">Programming Languages</div>
                <div class="categories">Mobile Application Development</div>
                <div class="categories">Technology and Tools</div>
                <div class="categories">Get a Job in a Tech Company</div>
                <div class="categories">Others</div>
            </div>
        </>
    )
}
export default FilterCategory;