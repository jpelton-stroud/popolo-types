declare namespace Popolo {
  namespace Person {
    interface Name {
      id?: string;
      name?: string;
      family_name?: string;
      given_name?: string;
      additional_name?: string;
      honorific_prefix?: string;
      honorific_suffix?: string;
      sort_name?: string;
    }

    interface Person {
      id?: string;
      name?: string;
      alternate_name?: Common.OtherName[];
      former_name?: Common.OtherName[];
      identifiers?: Common.Identifier[];
      email?: string;
      gender?: "male" | "female" | "non-binary";
      pronouns?: string;
      birth_date?: string;
      death_date?: string;
      image?: string;
      summary?: string;
      biography?: string;
      national_identity?: string;
      contact_details?: Common.ContactDetail[];
      links?: Common.Link[];
      memberships?: Organization.Membership[];
      motions?: Motion.Motion[];
      speeches?: Speech.Speech[];
      votes?: Vote.Vote[];
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
