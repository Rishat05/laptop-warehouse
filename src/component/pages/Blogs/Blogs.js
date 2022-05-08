import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h2 className='question'>Q1. Difference between javascript and nodejs</h2>
            <div className="differ">
                <div className="left">
                    <h3 className='question'>javascript</h3>
                    <p>Javascript is a programming language that is used for writing scripts on the website. </p>
                    <p>Javascript can only be run in the browsers.</p>
                    <p>Javascript is used in frontend development.</p>
                    <p>It is basically used on the client-side.</p>
                </div>
                <div className="right">
                    <h3 className='question'>nodejs</h3>
                    <p>NodeJS is a Javascript runtime environment.</p>
                    <p>We can run Javascript outside the browser with the help of NodeJS.</p>
                    <p>Nodejs is used in server-side development.</p>
                    <p>It is mostly used on the server-side.</p>
                </div>
            </div>

            <br />
            <h2 className='question'>Q2. When should you use nodejs and when should you use mongodb</h2>
            <p> MongoDB and NodeJS are two different technologies.NodeJS's responsibilty is especially to execute our application.MonogDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. Node.js is an interpreter or runtime/ running environment for JavaScript. built on Chrome's V8 JavaScript engine. responsibility is especially to execute your application. MongoDB is a No-SQL database for storing data. when we need high availability of data with automatic, fast, and instant data recovery.</p>
            <br />
            <h2 className='question'>Q3. Differences between sql and nosql databases.</h2>
            <div className="differ">
                <div className="left">
                    <h3 className='question'>sql</h3>
                    <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                    <p>These databases have fixed or static or predefined schema</p>
                    <p>These databases are not suited for hierarchical data storage.</p>
                    <p>Vertically Scalable</p>
                </div>
                <div className="right">
                    <h3 className='question'>nosql</h3>
                    <p>Non-relational or distributed database system.</p>
                    <p>They have dynamic schema</p>
                    <p>These databases are best suited for hierarchical data storage.</p>
                    <p>Horizontally scalable</p>

                </div>
            </div>
            <br />
            <h2 className='question'>Q4. What is the purpose of jwt and how does it work</h2>
            <p> JWTs are a good way of securely transmitting information between parties because they can be signed, which means we can be sure that the senders are who they say they are.  a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            <br />
        </div>
    );
};

export default Blogs;