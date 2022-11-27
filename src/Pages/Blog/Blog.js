import React from 'react';

const Blog = () => {
    return (
        <div className='py-12'>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">What are the different ways to manage a state in a React application?</h1>
                    </div>
                </article>
                <div>
                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <div className='py-4'>
                                <p className='font-semibold text-3xl mb-4'>Local state</p>
                                <p>
                                    Local state is data we manage in one or another component. Local
                                    state is most often managed in React using the useState hook. For
                                    example, local state would be needed to show or hide a modal
                                    component or to track values for a form component, such as form
                                    submission, when the form is disabled and the values of a form’s
                                    inputs.
                                </p>
                            </div>
                            <div className='py-4'>
                                <p className='font-semibold text-3xl mb-4'>Server state</p>
                                <p>
                                    Data that comes from an external server that must be integrated
                                    with our UI state. Server state is a simple concept, but can be
                                    hard to manage alongside all of our local and global UI state.
                                    There are several pieces of state that must be managed every time
                                    you fetch or update data from an external server, including
                                    loading and error state. Fortunately there are tools such as SWR
                                    and React Query that make managing server state much easier.
                                </p>
                            </div>
                            <div className='py-4'>
                                <p className='font-semibold text-3xl mb-4'>URL state</p>
                                <p>
                                    Data that exists on our URLs, including the pathname and query
                                    parameters. URL state is often missing as a category of state, but
                                    it is an important one. In many cases, a lot of major parts of our
                                    application rely upon accessing URL state. Try to imagine building
                                    a blog without being able to fetch a post based off of its slug or
                                    id that is located in the URL! There are undoubtedly more pieces
                                    of state that we could identify, but these are the major
                                    categories worth focusing on for most applications you build.
                                </p>
                            </div>
                            <div className='py-4'>
                                <p className='font-semibold text-3xl mb-4'>Global state</p>
                                <p>
                                    Global state is data we manage across multiple components. Global
                                    state is necessary when we want to get and update data anywhere in
                                    our app, or in multiple components at least. A common example of
                                    global state is authenticated user state. If a user is logged into
                                    our app, it is necessary to get and change their data throughout
                                    our application. Sometimes state we think should be local might
                                    become global.
                                </p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">How does prototypical inheritance work?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                                et a id nisi. The Prototypal Inheritance is a feature in
                                javascript used to add methods and properties in objects. It is a
                                method by which an object can inherit the properties and methods
                                of another object. Traditionally, in order to get and set the
                                [[Prototype]] of an object, we use Object. getPrototypeOf and
                                Object
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">What is Unit Testing?</h1>
                    </div>
                </article>
                <div>
                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                In computer programming, unit testing is a software testing method
                                by which individual units of source code—sets of one or more
                                computer program modules together with associated control data,
                                usage procedures, and operating procedures—are tested to determine
                                whether they are fit for use.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">How does prototypical inheritance work?</h1>
                    </div>
                </article>
                <div>
                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                                et a id nisi. The Prototypal Inheritance is a feature in
                                javascript used to add methods and properties in objects. It is a
                                method by which an object can inherit the properties and methods
                                of another object. Traditionally, in order to get and set the
                                [[Prototype]] of an object, we use Object. getPrototypeOf and
                                Object
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Why should we write Unit Testing?</h1>
                    </div>
                </article>
                <div>
                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>Unit testing is a powerful tool for software quality -- and has
                                been for decades. Unit tests provide a fundamental check that an
                                application meets its software design specifications and behaves
                                as intended. When done well, unit tests:
                            </li>
                            <li>
                                decrease defects and expose them early in the development
                                lifecycle;
                            </li>
                            <li>increase code readability;</li>
                            <li>enable code reuse;</li>
                            <li>improve deployment velocity.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">React VS Angular VS Vue</h1>
                    </div>
                </article>
                <div>
                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                Angular vs. React vs. Vue is one of primary choices in every web
                                development process. The frontend framework you select
                                influences almost everything: speed, and, therefore, cost of
                                development, compatibility with other technologies, app speed
                                and performance, and so on. The variety of technology available
                                is enormous. That’s why we’ve decided to prepare a series of
                                articles comparing the most popular technologies for different
                                purposes. We’re starting with frontend frameworks because they
                                are responsible for what users see in their browser.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;