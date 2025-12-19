declare namespace Popolo {
  namespace Common {
    interface Identifier {
      identifier: string;
      scheme: string;
    }

    interface Link {
      url: string;
      note: string;
    }

    interface OtherName {
      name: string;
      start_date?: string;
      end_date?: string;
      note?: string;
    }

    interface ContactDetail {
      type: string;
      value: string;
      label?: string;
      note?: string;
      valid_from?: string;
      valid_until?: string;
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
