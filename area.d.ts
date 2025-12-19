declare namespace Popolo {
  interface Area {
    id?: string;
    name?: string;
    identifier?: Identifier;
    parent_id?: string;
    parent?: Area;
    geometry?: {}; //TODO: after geojson
    memberships?: Membership[];
    organizations?: Organization[];
    posts?: Post[];
    children?: Area[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }
}
