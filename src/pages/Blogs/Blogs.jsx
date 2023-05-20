import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
	useTitle("Blogs");
	return (
		<div className='mt-10'>
			<div className='flex flex-col items-center'>
				<h4 className='text-4xl font text-red-400 text-center'>Blog Page</h4>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 1: What is an access token and refresh token and how do
						they work and where should we store them on the client-side?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> An access token and
						a refresh token are commonly used in authentication systems to
						authorize and authenticate client applications when accessing
						protected resources on a server.
					</p>
					<p>
						Access Token: An access token is a credential that is used to access
						protected resources on a server. It is typically a string of
						characters that represents the authorization granted to the client
						application. Access tokens have a limited lifespan and expire after
						a certain period of time.
					</p>
					<p>
						Refresh Token: A refresh token is a credential that is used to
						obtain a new access token once the current access token expires. It
						is typically issued alongside an access token and has a longer
						lifespan compared to the access token. The refresh token is securely
						stored by the client application and is used to request a new access
						token without requiring the user to reauthenticate.
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 2: Compare SQL and NoSQL databases?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> The five differences
						between SQL and NoSQL are:
						<p>
							1. SQL databases are relational, and NoSQL databases are
							non-relational.
						</p>
						<p>
							2. SQL databases use structured query language (SQL) and have a
							predefined schema. NoSQL databases have dynamic schemas for
							unstructured data.
						</p>
						<p>
							3. SQL databases are vertically scalable, while NoSQL databases
							are horizontally scalable.
						</p>
						<p>
							4. SQL databases are table-based, while NoSQL databases are
							document, key-value, graph, or wide-column stores.
						</p>
						<p>
							5. SQL databases are better for multi-row transactions, while
							NoSQL is better for unstructured data like documents or JSON.
						</p>
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 3: What is express js and Nest JS?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span>
						<p>
							Express.js is a popular web application framework for Node.js,
							which is a JavaScript runtime built on Chrome's V8 JavaScript
							engine. Express.js provides a minimalistic and flexible set of
							features for building web applications and APIs. It is often
							referred to as a "minimalist" framework because it provides a thin
							layer of web application functionality, allowing developers to add
							additional libraries and modules as needed.
						</p>
						<p className='mt-5'>
							Nest.js, is a progressive TypeScript-based web application
							framework built on top of Express.js. It is designed to provide an
							efficient and scalable architecture for building server-side
							applications. Nest.js takes inspiration from Angular, a popular
							front-end framework, and applies similar concepts and patterns to
							the server-side development.
						</p>
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 4: What is MongoDB aggregate and how does it work?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> MongoDB is a
						document-based NoSQL database where data is organized in collections
						that are made up of JSON documents. As with any database, MongoDB
						has a language that a user can use to access data. In MongoDBs case,
						this language is the MongoDB Query Language or simply, MQL. Whether
						MQL or SQL, database queries can start off simple, but as a database
						scales more complex queries arise. The MongoDB Aggregation Framework
						is a way to query documents from MongoDB in a way that breaks down
						these more confounding queries. It separates complex logic into
						sequential operations. In this guide, we will introduce the MongoDB
						Aggregation Framework, discuss common aggregation stages, and finish
						up with a simple aggregation pipeline example.
					</p>
					<p>
						The purpose of MongoDB’s Aggregation Framework is to design a
						pipeline consisting of multiple stages for processing documents. You
						start with your collection's data and after each stage of the
						pipeline you are closer to the end result which will be the desired
						documents. Each stage performs an operation on the documents. There
						are several operations that can be conducted. For example, a stage
						can filter, group, or even calculate values on the data. After each
						stage, the outputted documents are passed into the next stage and so
						on until no stages are left.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
