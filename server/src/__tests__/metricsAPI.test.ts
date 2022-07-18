import * as request from "supertest";

const HOST = 'http://localhost:8080';

describe("GET `${HOST}`", () => {
    it("/metrics/getRepositoriesMetricsByTribe - API Request to get repository metrics by tribe", async () => {
        const result = await request(HOST).get('/metrics/getRepositoriesMetricsByTribe/1');
        expect(JSON.parse(result.text)).toEqual([
            {
                "id": 1,
                "name": "cd-common-utils",
                "tribe": "Centro Digital",
                "organization": "Banco Pichincha",
                "coverage": "35%",
                "codeSmells": 0,
                "bugs": 0,
                "vulnerabilities": 0,
                "hotspots": 0,
                "verificationState": "E",
                "state": "Activo"
            },
            {
                "id": 2,
                "name": "cd-common-text",
                "tribe": "Centro Digital",
                "organization": "Banco Pichincha",
                "coverage": "75%",
                "codeSmells": 1,
                "bugs": 0,
                "vulnerabilities": 2,
                "hotspots": 0,
                "verificationState": "A",
                "state": "Archivado"
            }
        ]);
    });
});
