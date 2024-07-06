interface AddStreamParams {
    name: string;
}

export async function addStream({ name }: AddStreamParams): Promise<Response> {
    const bearer = btoa('hyde:hyde');

    const url = `https://media.hydeinnovations.com:8080/streamer/api/v3/streams/${name}`;
    const response = fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            title: 'sheila',
            disabled: false,
            static: true,
            inputs: [
                {
                    url: 'publish://',
                },
            ],
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearer}`,
        },
    });

    return response;
}
