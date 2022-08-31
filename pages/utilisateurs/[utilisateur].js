import React from "react";

export default function utilisateur(props) {
    console.log(props);
    return (
        <div>
            <h1>USER</h1>
        </div>
    );
}

export async function getStaticProps(context) {
    const id = context.params.utilisateur;

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const utilisateur = await data.json();

    return {
        props: {
            utilisateur,
        },
    };
}

export async function getStaticPaths() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    const paths = users.map((item) => ({
        params: {
            utilisateur: item.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
