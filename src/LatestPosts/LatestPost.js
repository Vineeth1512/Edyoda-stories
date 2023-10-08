import React from "react";
import "./LatestPost.css"
import FilterCategory from "./FilterCategory";


const cardDetails = [
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
        cardTitle: "Introducing you all to EdYoda...",
        cardAuthor: "Arman Ahmed",
        cardDate: "05 Jul 2019 ",
        cardDescription: "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of."
    },

    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
        cardTitle: "From identity crisis to the Success Story - The...",
        cardAuthor: "Kalyan Mahalingam",
        cardDate: "09 Jul 2019 ",
        cardDescription: "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the."
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
        cardTitle: "Typical day of Data Scientist - An insider...",
        cardAuthor: "Saurav Ghosh",
        cardDate: "09 Jul 2019 ",
        cardDescription: "I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that."
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
        cardTitle: "Amazon Web Services (AWS) Cloud Day...",
        cardAuthor: "Kalyan Mahalingam ",
        cardDate: "04 Jul 2019",
        cardDescription: "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels)."
    },

    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
        cardTitle: "EdYoda Meetup #01 : A Date with Cloud",
        cardAuthor: "Ashish Pandey",
        cardDate: "07 Jul 2019",
        cardDescription: "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the "
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg",
        cardTitle: "Industry 4.0 - The Prospects & Journey...",
        cardAuthor: "Pitanjal Dutta",
        cardDate: "09 Jul 2019",
        cardDescription: "Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human involvement? "
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
        cardTitle: "Why do Database Systems Exist ?",
        cardAuthor: "Pitanjal Dutta",
        cardDate: "09 Jul 2019",
        cardDescription: "Wondering why Database Management Systems like MySQL, NOSQL, MSSQL, Oracle SQL, MongoDB form the fundamental blocks behind working with Data?."
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg",
        cardTitle: "Ace your Soft Skills - Tips to crack the job interview",
        cardAuthor: "Arman Ahmed",
        cardDate: "08 Jul 2019",
        cardDescription: "Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is given a lot of weightage and thus becomes "
    },
    {
        cardImage: "https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg",
        cardTitle: "Master your General Aptitude Job Interview...",
        cardAuthor: "Pavan Manugonda",
        cardDate: "08 Jul 2019",
        cardDescription: "A general aptitude becomes very important, when you apply for a job in a tech company. You might be highly skilled in your subject domain. However, these basic"
    }



]






function LatestPost() {
    return (
        <React.Fragment>
            <div class="main">
                <FilterCategory />
                <div class="card-items">

                    {cardDetails.map((card, i) => {
                        return <div class="card">
                            <div class="img-section">
                                <img class="image" src={card.cardImage}
                                    alt="Introducing you all to EdYoda - www.edyoda.com" />
                            </div>
                            <div class="details">
                                <h2 class="title">{card.cardTitle}</h2>
                                <a href="# " class="author ">{card.cardAuthor}</a>
                                <span class="date "> <strong> | </strong> {card.cardDate}</span>
                                <p class="para ">{card.cardDescription}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <footer>

            </footer>

        </React.Fragment >
    )
}
export default LatestPost;