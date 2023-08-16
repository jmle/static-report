export interface ReportDto {
    id: string;
    name: string;
    files: FileDto;
    rulesets?: RulesetDto[];
    depItems?: DependencyItemDto[];
    issues?: IssueDto[];
    dependencies?: DependencyDto[];
}

export interface RulesetDto {
    name: string;
    description: string;
    tags: string[];
    violations: {
        [key: string]: IssueDto;
    }
}

export interface IssueDto {
    ruleset?: string;
    rule?: string;
    name?: string;
    description: string;
    category: string;
    labels: string[];
    incidents: IncidentDto[];
    links: LinkDto[];
    effort: number;
}

export interface IncidentDto {
    uri?: string;
    file?: string;
    message: string;
    codeSnip: string;
    lineNumber: number;
    variables: {
        [key: string]: Object;
    }
}

export interface LinkDto {
    url: string;
    title: string;
}

export interface DependencyItemDto {
  fileURI: string;
  provider: string;
  dependencies: DependencyDto[];
}

export interface DependencyDto {
  provider?: string;
  resolvedIdentifier?: string;
  sha?: string;
  name: string;
  version: string;
  indirect: boolean;
  labels: string[];
  fileURIPrefix: string;
}

export interface FileDto {
  [filename: string]: string;
}
