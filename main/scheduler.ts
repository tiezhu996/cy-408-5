import { ReminderStatus } from '../shared/types/enums';
import { showReminder } from './notification';
import { ReminderRepository } from './repositories/reminder';

export function startReminderScheduler() {
  const repo = new ReminderRepository();
  const notifiedIds = new Set<string>();
  setInterval(() => {
    const now = Date.now();
    repo
      .list()
      .filter((item) => {
        if (item.status !== ReminderStatus.Pending) return false;
        if (notifiedIds.has(item.id)) return false;
        const remindTime = new Date(item.remindAt).getTime();
        return remindTime <= now;
      })
      .forEach((item) => {
        showReminder(item);
        notifiedIds.add(item.id);
      });
  }, 10_000);
}
