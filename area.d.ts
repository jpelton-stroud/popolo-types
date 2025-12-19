declare namespace Popolo {
  namespace Area {
    interface Area {
      id?: string;
      name?: string;
      identifier?: Common.Identifier;
      parent_id?: string;
      parent?: Area;
      geometry?: {}; //TODO: after geojson
      memberships?: Organization.Membership[];
      organizations?: Organization.Organization[];
      posts?: Organization.Post[];
      children?: Area[];
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
