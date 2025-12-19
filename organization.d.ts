declare namespace Popolo {
  namespace Organization {
    interface Organization {
      id?: string;
      name?: string;
      other_names?: Common.OtherName[];
      identifiers?: Common.Identifier[];
      classification?: string;
      parent_id?: string;
      parent?: Organization;
      area_id?: string;
      area?: Area.Area[];
      abstract?: string;
      description?: string;
      founding_date?: string;
      dissolution_date?: string;
      image?: string;
      contact_details?: Common.ContactDetail[];
      links?: Common.Link[];
      memberships?: Membership[];
      posts?: Post[];
      motions?: Motion.Motion[];
      vote_events?: Vote.Event[];
      votes?: Vote.Vote[];
      children?: Organization[];
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }

    interface Membership {
      id?: string;
      label?: string;
      role?: string;
      member?: Person.Person | Organization.Organization;
      person_id?: string;
      person?: Person.Person;
      organization_id?: string;
      organization?: Organization.Organization;
      post_id?: string;
      post?: Post[];
      on_behalf_of_id?: string;
      on_behalf_of?: Organization;
      area_id?: string;
      area?: Area.Area[];
      start_date?: string;
      end_date?: string;
      contact_details?: Common.ContactDetail[];
      links?: Common.Link[];
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }

    interface Post {
      id?: string;
      label?: string;
      other_label?: string;
      role?: string;
      organization_id?: string;
      organization?: Organization.Organization;
      area_id?: string;
      area?: Area.Area[];
      start_date?: string;
      end_date?: string;
      contact_details?: Common.ContactDetail[];
      links?: Common.Link[];
      memberships?: Membership[];
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
