import { getHumanReadableCoverage } from '../models/metrics';
import { getHumanReadableState } from '../models/repository';

export default class MetricsDTO {
    data;
    constructor(data){
        this.data = data.map(item=>({
            id: item.id_repository,
            name: item.repository.name,
            tribe: item.repository.tribe.name,
            organization: item.repository.tribe.organization.name,
            coverage: getHumanReadableCoverage(item.coverage),
            codeSmells: item.code_smells,
            bugs: item.bugs,
            vulnerabilities: item.vulnerabilities,
            hotspots: item.hotspot,
            verificationState: item.repository.state,
            state: getHumanReadableState(item.repository.state)
        }));
    }
    getData(){
        return this.data;
    };
}
