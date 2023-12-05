import Container from '@suid/material/Container';
import FormControlLabel from '@suid/material/FormControlLabel';
import Paper from '@suid/material/Paper';
import Switch from '@suid/material/Switch';
import { Component } from 'solid-js';
import LayoutTemplate from '../../../templates/LayoutTemplate';

export const SettingsPage: Component = () => {
  return (
    <LayoutTemplate>
      <div class="py-8">
        <Container>
          <Paper class="border p-8">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-2">
                <h2 class="uppercase text-gray-700">Activity</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone comments on my article"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone answers on my article"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Email me when someone follows me"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="uppercase text-gray-700">Application</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="News and announcements"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Weekly product updates"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Weekly blog digest"
                />
              </div>
            </div>
          </Paper>
        </Container>
      </div>
    </LayoutTemplate>
  );
};

export default SettingsPage;
