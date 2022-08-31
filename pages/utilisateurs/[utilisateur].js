import React from "react";

export default function utilisateur({ utilisateur }) {
    // console.log(utilisateur);
    return (
        <div className="container px-4 pt-5">
            <h2 className="text-center mb-4">
                Nom d'utilisateur : {utilisateur.username}
            </h2>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-6">
                    <div className="card p-2">
                        <div className="card-body">
                            <h4 className="card-title">{utilisateur.name}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">
                                Username : {utilisateur.username}
                            </h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Email :{utilisateur.email}
                                </li>
                                <li className="list-group-item">
                                    Site web : {utilisateur.website}
                                </li>
                                <li className="list-group-item">
                                    Téléphone : {utilisateur.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
