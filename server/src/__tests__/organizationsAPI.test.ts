import * as request from "supertest";

const HOST = 'http://localhost:8080';

describe("GET `${HOST}`", () => {
    it("/organizations/getOrganizations - API Request to get all organizations", async () => {
        const result = await request(HOST).get('/organizations/getOrganizations');
        expect(JSON.parse(result.text)).toEqual([
            { id: 1, name: 'Organization Banco Pichincha', status: 1 },
            { id: 2, name: 'Organization 2', status: 1 },
            { id: 3, name: 'Organization 3', status: 1 }
        ]);
    });
    it("/organizations/getOrganization/1 - API Request to get the organization with id = 1", async () => {
        const result = await request(HOST).get('/organizations/getOrganization/1');
        expect(JSON.parse(result.text)).toEqual({ id: 1, name: 'Organization Banco Pichincha', status: 1 });
    });
    it("/organizations/createOrganization - API Request to create an organization", async () => {
        await request(HOST).post('/organizations/createOrganization').send({name: "organization 4"});
        const result = await request(HOST).get('/organizations/getOrganization/4');
        expect(JSON.parse(result.text)).toEqual({ id: 4, name: 'organization 4', status: 1 });
    });
    it("/organizations/editOrganization/4 - API Request to edit an organization", async () => {
        await request(HOST).put('/organizations/editOrganization/4').send({"name":"Organization edited"});
        const result = await request(HOST).get('/organizations/getOrganization/4');
        expect(JSON.parse(result.text)).toEqual({ id: 4, name: 'Organization edited', status: 1 });
    });
    it("/organizations/deleteOrganization/4 - API Request to delete an organization", async () => {
        await request(HOST).delete('/organizations/deleteOrganization/4');
        const result = await request(HOST).get('/organizations/getOrganization/4');
        expect(result.text).toEqual('');
    });
});
