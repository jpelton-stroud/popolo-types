declare namespace Popolo {
  namespace Vote {
    interface Vote {
        id?: string;
        vote_event_id?: string;
        vote_event?: Event;
        voter_id?: string;
        voter?: Person.Person;
        option?: string;
        group_id?: string;
        group?: Organization.Organization[];
        role?: string;
        weight?: number;
        pair_id?: string;
        pair?: Person.Person;
    }
    interface Count {
        option: string;
        value: number;
        group_id?: string;
        group?: Organization.Organization;
    }
    interface Event {
      id?: string;
      organization_id?: string;
      organization?: Organization.Organization;
      legislative_session_id?: string;
      legislative_session?: {}; //TODO: after legislative_session
      identifier?: Common.Identifier;
      motion_id?: string;
      motion?: Motion.Motion;
      classification?: string;
      start_date?: string;
      end_date?: string;
      result?: string;
      group_results: {}[]; //TODO: after group_results
      counts: {}[]; //TODO: after counts
      created_at?: string;
      updated_at?: string;
      sources?: Common.Link[];
    }
  }
}
