declare namespace Popolo {
  interface Organization {
    id?: string;
    name?: string;
    other_names?: OtherName[];
    identifiers?: Identifier[];
    classification?: string;
    parent_id?: string;
    parent?: Organization;
    area_id?: string;
    area?: Area[];
    abstract?: string;
    description?: string;
    founding_date?: string;
    dissolution_date?: string;
    image?: string;
    contact_details?: ContactDetail[];
    links?: Link[];
    memberships?: Membership[];
    posts?: Post[];
    motions?: Motion[];
    vote_events?: VoteEvent[];
    votes?: Vote[];
    children?: Organization[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }

  interface Membership {
    id?: string;
    label?: string;
    role?: string;
    member?: Person | Organization;
    person_id?: string;
    person?: Person;
    organization_id?: string;
    organization?: Organization;
    post_id?: string;
    post?: Post[];
    on_behalf_of_id?: string;
    on_behalf_of?: Organization;
    area_id?: string;
    area?: Area[];
    start_date?: string;
    end_date?: string;
    contact_details?: ContactDetail[];
    links?: Link[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }

  interface Post {
    id?: string;
    label?: string;
    other_label?: string;
    role?: string;
    organization_id?: string;
    organization?: Organization;
    area_id?: string;
    area?: Area[];
    start_date?: string;
    end_date?: string;
    contact_details?: ContactDetail[];
    links?: Link[];
    memberships?: Membership[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }
}
