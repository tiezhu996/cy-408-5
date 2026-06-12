import { List } from 'antd';
import { Reminder } from '../../../../shared/types/entities';
import { ReminderStatus } from '../../../../shared/types/enums';

export function ReminderList({ reminders }: { reminders: Reminder[] }) {
  const pendingReminders = reminders.filter((item) => item.status === ReminderStatus.Pending);
  return <List dataSource={pendingReminders} renderItem={(item) => <List.Item>{item.remindAt} · {item.content}</List.Item>} />;
}
