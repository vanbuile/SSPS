import React, { useState, useEffect } from 'react';
import AdminInfo from '../../components/AdminInfo';

export default function InfoAdmin() {
    const handleAuthorization = (role) => {
		const cookies = document.cookie.split('; ');
		for (const cookie of cookies) {
			const [name, value] = cookie.split('=');
			if(name === role) {
				return true
			}
		}
		window.location.href = 'http://localhost:3000/login';
	}
    if (handleAuthorization('SPSO_cookie_id') == true) {
        return (
            <AdminInfo/>
        );
    }
}
