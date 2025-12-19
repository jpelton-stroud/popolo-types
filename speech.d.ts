declare namespace Popolo {
  namespace Speech {
    interface Speech {
      id?: string;
      creator_id?: string;
      creator?: Person.Person;
      role?: string;
      attribution_text?: string;
      audience_id?: string;
      text?: string;
      audio?: string;
      video?: string;
      date?: string;
      title?: string;
      type?: string;
      position?: number;
      event_id?: string;
      event?: Event.Event;
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
