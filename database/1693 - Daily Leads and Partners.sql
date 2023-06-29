SELECT date_id,
       make_name,
       Count(DISTINCT lead_id)    unique_leads,
       Count(DISTINCT partner_id) unique_partners
FROM   dailysales
GROUP BY  date_id,
          make_name 
