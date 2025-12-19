declare namespace Popolo {
    interface PersonName {
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
      alternate_name?: OtherName[];
      former_name?: OtherName[];
      identifiers?: Identifier[];
      email?: string;
      gender?: "male" | "female" | "non-binary";
      pronouns?: string;
      birth_date?: string;
      death_date?: string;
      image?: string;
      summary?: string;
      biography?: string;
      national_identity?: string;
      contact_details?: ContactDetail[];
      links?: Link[];
      memberships?: Membership[];
      motions?: Motion[];
      speeches?: Speech[];
      votes?: Vote[];
      created_at?: string;
      updated_at?: string;
      sources?: Link[];
    }
  }