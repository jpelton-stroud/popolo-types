declare namespace Popolo {
    namespace Motion {
        interface Motion {
            id?: string;
            organization_id?: string;
            organization?: Organization.Organization;
            legislative_session_id?: string;
            legislative_session?: {}; //TODO: after legislative_session
            creator_id?: string;
            creator?: Person.Person;
            text?: string;
            identifier?: Common.Identifier;
            date?: string;
            classification?: string;
            requirement?: string;
            result?: string;
            vote_events?: Vote.Event[];
            created_at?: string;
            updated_at?: string;
            sources?: Common.Link[];
        }
    }
}